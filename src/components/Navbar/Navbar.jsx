import { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import GlassSurface from '../GlassSurface/GlassSurface';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null);
  const navRef = useRef(null);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previous; };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!navContainerRef.current || !navRef.current) return;
      if (window.scrollY > 42) {
        navContainerRef.current.classList.add('shrunk');
        navRef.current.classList.add('shrunk');
      } else {
        navContainerRef.current.classList.remove('shrunk');
        navRef.current.classList.remove('shrunk');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy - detectar sección activa al hacer scroll
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'work', 'contact'];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100; // Offset para el navbar

      // Encontrar la sección más cercana al top del viewport
      let currentSection = 'home';
      let minDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          // Si la sección está por encima de la posición actual de scroll, es candidata
          if (offsetTop <= scrollPosition) {
            const distance = scrollPosition - offsetTop;
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = sectionId;
            }
          }
        }
      });

      setMenu(prev => prev !== currentSection ? currentSection : prev);
    };

    // Ejecutar una vez al cargar
    handleScrollSpy();

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setMenu(id);
    }
  };

  return (
    <GlassSurface
      width="100%"
      height="80"
      borderRadius={50}
      className="navbar-glass"
      displace={0}
      distortionScale={-80}
      brightness={55}
      opacity={0.97}
      backgroundOpacity={0.05}
      saturation={2.0}
      blur={28}
      redOffset={0}
      greenOffset={3}
      blueOffset={6}
    >
      <div className='navbar' ref={navContainerRef}>
        <img src={logo} alt="Logo" ref={navRef} />
        <button aria-label="Abrir menú" aria-controls="primary-navigation" aria-expanded={isMenuOpen} className='nav-mob-open' onClick={openMenu}>
          <img src={menu_open} alt="Abrir menú" />
        </button>
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true"></div>}
        <ul id="primary-navigation" className={`nav-menu ${isMenuOpen ? 'open' : ''}`} role="menubar">
          <li role="none">
            <button aria-label="Cerrar menú" className="nav-mob-close" onClick={closeMenu}>
              <img src={menu_close} alt="Cerrar menú" />
            </button>
          </li>
          <li role="none">
            <a className='anchor-link' href="#home" onClick={e => { e.preventDefault(); scrollToSection('home'); closeMenu(); }} role="menuitem" aria-current={menu === 'home' ? 'page' : undefined}>
              Inicio
            </a>
            {menu === "home" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
          </li>
          <li role="none">
            <a className='anchor-link' href="#about" onClick={e => { e.preventDefault(); scrollToSection('about'); closeMenu(); }} role="menuitem" aria-current={menu === 'about' ? 'page' : undefined}>
              Sobre mí
            </a>
            {menu === "about" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
          </li>
          <li role="none">
            <a className='anchor-link' href="#services" onClick={e => { e.preventDefault(); scrollToSection('services'); closeMenu(); }} role="menuitem" aria-current={menu === 'services' ? 'page' : undefined}>
              Servicios
            </a>
            {menu === "services" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
          </li>
          <li role="none">
            <a className='anchor-link' href="#work" onClick={e => { e.preventDefault(); scrollToSection('work'); closeMenu(); }} role="menuitem" aria-current={menu === 'work' ? 'page' : undefined}>
              Portafolio
            </a>
            {menu === "work" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
          </li>
          <li role="none">
            <a className='anchor-link' href="#contact" onClick={e => { e.preventDefault(); scrollToSection('contact'); closeMenu(); }} role="menuitem" aria-current={menu === 'contact' ? 'page' : undefined}>
              Contacto
            </a>
            {menu === "contact" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
          </li>
        </ul>
      </div>
    </GlassSurface>
  )
}

export default Navbar;
