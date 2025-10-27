import React, { useEffect, useState } from 'react';
import './MobileNotice.css';

const MobileNotice = ({ breakpoint = 480 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = e => setShow(e.matches);
    handler(mq); // set initial
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [breakpoint]);

  if (!show) return null;

  return (
    <div className="mobile-notice-backdrop" role="dialog" aria-modal="true">
      <div className="mobile-notice-card">
        <div className="mn-header">
          <h2>Mejor en escritorio</h2>
          <p className="mn-sub">Para una experiencia completa, abre este sitio en tu PC</p>
        </div>
        <div className="mn-art">
          <div className="mn-glow" />
          <div className="mn-frame">
            <div className="mn-dots" />
          </div>
        </div>
        <div className="mn-actions">
          <a href="#" onClick={e => e.preventDefault()} className="mn-btn mn-btn-primary">Entendido</a>
          <a href="#" onClick={e => e.preventDefault()} className="mn-btn mn-btn-secondary">Seguir en móvil</a>
        </div>
        <div className="mn-note">Puedes usar el menú o compartir este enlace a tu correo para abrirlo luego en el ordenador.</div>
      </div>
    </div>
  );
};

export default MobileNotice;
