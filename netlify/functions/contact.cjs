const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

const jsonResponse = (statusCode, payload) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(payload)
});

const isNonEmpty = value => typeof value === 'string' && value.trim().length > 0;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { success: false, message: 'Método no permitido.' });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return jsonResponse(500, { success: false, message: 'Falta configurar WEB3FORMS_ACCESS_KEY.' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return jsonResponse(400, { success: false, message: 'JSON inválido.' });
  }

  const { name, email, message, botcheck } = payload;

  if (isNonEmpty(botcheck)) {
    return jsonResponse(200, { success: true, message: 'OK' });
  }

  if (!isNonEmpty(name) || !isNonEmpty(email) || !isNonEmpty(message)) {
    return jsonResponse(400, { success: false, message: 'Todos los campos son obligatorios.' });
  }

  const web3Payload = {
    access_key: accessKey,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    subject: 'Nuevo mensaje desde portfolio-react'
  };

  try {
    const upstream = await fetch(WEB3FORMS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(web3Payload)
    });

    const upstreamJson = await upstream.json();

    if (!upstream.ok || !upstreamJson.success) {
      return jsonResponse(502, {
        success: false,
        message: 'No se pudo enviar el mensaje en este momento.'
      });
    }

    return jsonResponse(200, {
      success: true,
      message: '¡Mensaje enviado! Te responderé pronto.'
    });
  } catch {
    return jsonResponse(502, {
      success: false,
      message: 'Error de red al procesar el formulario.'
    });
  }
};
