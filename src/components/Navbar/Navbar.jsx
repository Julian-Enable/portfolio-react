import { useEffect, useState, useRef, useCallback } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import GlassSurface from '../GlassSurface/GlassSurface';

const SECTIONS = ['home', 'about', 'services', 'work', 'contact'];

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const glassRef = useRef(null);
  const navbarRef = useRef(null);
  const isScrollingRef = useRef(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previous; };
    }
  }, [isMenuOpen]);

  // Efecto shrink al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!glassRef.current || !navbarRef.current) return;
      const shouldShrink = window.scrollY > 42;
      glassRef.current.classList.toggle('shrunk', shouldShrink);
      navbarRef.current.classList.toggle('shrunk', shouldShrink);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer para sincronizar menú activo con scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenu(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      isScrollingRef.current = true;
      setMenu(id);

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Reset flag después de la animación de scroll
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <GlassSurface
      width="100%"
      height="80"
      borderRadius={50}
      className="navbar-glass"
      displace={0}
      distortionScale={-150}
      brightness={50}
      opacity={0.95}
      backgroundOpacity={0.08}
      saturation={1.8}
      blur={20}
      redOffset={0}
      greenOffset={0}
      blueOffset={0}
      ref={glassRef}
    >
      <div className='navbar' ref={navbarRef}>
        <img src={logo} alt="Logo" />
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
