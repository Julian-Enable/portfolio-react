import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import GlassSurface from '../GlassSurface/GlassSurface';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "work", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMenu(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previous; };
    }
  }, [isMenuOpen]);

  return (
    <GlassSurface 
      width="100%" 
      height="80"
      borderRadius={50}
      className="navbar-glass"
      displace={10}
      distortionScale={-150}
      brightness={15}
      opacity={0.25}
      backgroundOpacity={0.15}
      saturation={1.5}
      blur={15}
      redOffset={5}
      greenOffset={12}
      blueOffset={20}
    >
      <div className='navbar'>
        <img src={logo} alt="Logo" />
        <button aria-label="Abrir menú" aria-controls="primary-navigation" aria-expanded={isMenuOpen} className='nav-mob-open' onClick={openMenu}>
          <img src={menu_open} alt="Abrir menú" />
        </button>
        </button>
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true"></div>}
      <ul id="primary-navigation" className={`nav-menu ${isMenuOpen ? 'open' : ''}`} role="menubar">
        <li role="none">
          <button aria-label="Cerrar menú" className="nav-mob-close" onClick={closeMenu}>
            <img src={menu_close} alt="Cerrar menú" />
          </button>
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' href='#home' onClick={() => { setMenu("home"); closeMenu(); }} role="menuitem" aria-current={menu === 'home' ? 'page' : undefined}>
            Inicio
          </AnchorLink>
          {menu === "home" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => { setMenu("about"); closeMenu(); }} role="menuitem" aria-current={menu === 'about' ? 'page' : undefined}>
            Sobre mí
          </AnchorLink>
          {menu === "about" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#services' onClick={() => { setMenu("services"); closeMenu(); }} role="menuitem" aria-current={menu === 'services' ? 'page' : undefined}>
            Servicios
          </AnchorLink>
          {menu === "services" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#work' onClick={() => { setMenu("work"); closeMenu(); }} role="menuitem" aria-current={menu === 'work' ? 'page' : undefined}>
            Portafolio
          </AnchorLink>
          {menu === "work" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => { setMenu("contact"); closeMenu(); }} role="menuitem" aria-current={menu === 'contact' ? 'page' : undefined}>
            Contacto
          </AnchorLink>
          {menu === "contact" ? <img className="nav-active-underline" src={underline} alt="Subrayado" /> : null}
        </li>
      </ul>
      </div>
    </GlassSurface>
  )
}

export default Navbar;
