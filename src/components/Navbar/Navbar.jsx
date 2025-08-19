import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

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

  return (
    <div className='navbar'>
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
          <AnchorLink className='anchor-link' href='#home' onClick={() => { setMenu("home"); closeMenu(); }} role="menuitem" aria-current={menu === 'home' ? 'page' : undefined}>
            Inicio
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => { setMenu("about"); closeMenu(); }} role="menuitem" aria-current={menu === 'about' ? 'page' : undefined}>
            Sobre mí
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#services' onClick={() => { setMenu("services"); closeMenu(); }} role="menuitem" aria-current={menu === 'services' ? 'page' : undefined}>
            Servicios
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#work' onClick={() => { setMenu("work"); closeMenu(); }} role="menuitem" aria-current={menu === 'work' ? 'page' : undefined}>
            Portafolio
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="Subrayado" /> : null}
        </li>
        <li role="none">
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => { setMenu("contact"); closeMenu(); }} role="menuitem" aria-current={menu === 'contact' ? 'page' : undefined}>
            Contacto
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="Subrayado" /> : null}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Contáctame</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;
