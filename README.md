# 🚀 Portfolio Personal - Julián Merchán

Portfolio profesional de desarrollador de software construido con React + Vite.

## 📋 Características

- ✅ **React 18** con Vite para desarrollo rápido
- ✅ **Totalmente responsivo** - Mobile-first design
- ✅ **Accesibilidad mejorada** - ARIA labels, semantic HTML
- ✅ **Navegación suave** - Smooth scroll y detección de sección activa
- ✅ **Formulario de contacto funcional** - Integración con Web3Forms
- ✅ **Formulario de suscripción** - Newsletter en el footer
- ✅ **Performance optimizado** - Lazy loading, CSS optimizado
- ✅ **Sistema de diseño moderno** - Gradientes, glassmorphism, animaciones

## 🛠️ Tecnologías

- **Frontend**: React 18.2, JavaScript (JSX)
- **Build Tool**: Vite 5.2
- **Estilos**: CSS puro con variables CSS
- **Navegación**: react-anchor-link-smooth-scroll
- **Formularios**: Web3Forms API
- **Linting**: ESLint

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Julian-Enable/portfolio-react.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar/          # Navegación con menú móvil
│   ├── Hero/            # Sección principal
│   ├── About/           # Información y habilidades
│   ├── Highlights/      # Características destacadas
│   ├── Services/        # Servicios ofrecidos
│   ├── MyWork/          # Portfolio de proyectos
│   ├── Contact/         # Formulario de contacto
│   └── Footer/          # Footer con suscripción
├── assets/              # Imágenes, SVGs y datos
├── App.jsx              # Componente principal
└── main.jsx             # Entry point
```

## 🎨 Personalización

### Colores y Variables CSS

Edita `src/index.css` para cambiar el sistema de colores:

```css
:root {
  --brand-grad: linear-gradient(120deg, #B415FF 0%, #C94BF5 35%, #DF8908 100%);
  --btn-shadow: 0 4px 12px rgba(180, 21, 255, 0.22);
}
```

### Datos del Portfolio

- **Proyectos**: `src/assets/mywork_data.js`
- **Servicios**: `src/assets/services_data.js`

## 📧 Configuración de Formularios

El formulario de contacto usa un endpoint backend serverless (`/api/contact`) en Netlify que reenvía a Web3Forms.

### Variables de entorno recomendadas

- **Producción (Netlify):** `WEB3FORMS_ACCESS_KEY`
- **Local opcional (fallback en Vite):** `VITE_WEB3FORMS_ACCESS_KEY`

### Configuración rápida

1. Obtén tu API key en [web3forms.com](https://web3forms.com)
2. En Netlify, agrega `WEB3FORMS_ACCESS_KEY` en **Site settings → Environment variables**
3. (Opcional local) copia `.env.example` a `.env.local` y define `VITE_WEB3FORMS_ACCESS_KEY`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 821px - 1024px
- **Mobile**: < 480px

## 🚀 Deploy

El proyecto está listo para desplegar en:
- Netlify
- Vercel
- GitHub Pages

```bash
npm run build
# Sube la carpeta dist/ a tu servicio de hosting
```

## 📄 Licencia

© 2025 Julián Merchán. Todos los derechos reservados.

## 🤝 Contacto

- **Email**: engjuliangonzalez@gmail.com
- **GitHub**: [Julian-Enable](https://github.com/Julian-Enable)
- **Ubicación**: Bogotá D.C., Colombia
