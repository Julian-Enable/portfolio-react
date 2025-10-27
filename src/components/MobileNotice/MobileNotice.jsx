import React, { useEffect, useState, useRef } from 'react';
import './MobileNotice.css';
import monitorUrl from '../../assets/monitor_mockup.svg';

const MobileNotice = ({ breakpoint = 480 }) => {
  const [show, setShow] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    // Only show when viewport is small and user hasn't dismissed permanently
    const checkAndShow = () => {
      const dismissed = localStorage.getItem('mobileNoticeDismissed');
      const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
      if (!dismissed && mq.matches) setShow(true);
      else setShow(false);
    };

    checkAndShow();

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = e => {
      const dismissed = localStorage.getItem('mobileNoticeDismissed');
      if (!dismissed && e.matches) setShow(true);
      else setShow(false);
    };

    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);

    mountedRef.current = true;

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
      mountedRef.current = false;
    };
  }, [breakpoint]);

  // block body scroll and background interactions while shown
  useEffect(() => {
    if (show) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-notice-open');
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-notice-open');
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-notice-open');
    };
  }, [show]);

  if (!show) return null;

  const handleDismissPermanent = () => {
    localStorage.setItem('mobileNoticeDismissed', 'true');
    setShow(false);
  };

  const handleContinueMobile = () => {
    // session-level dismissal (still allow showing later)
    sessionStorage.setItem('mobileNoticeSessionDismissed', 'true');
    setShow(false);
  };

  const title = 'MEJOR EN ESCRITORIO';

  return (
    <div className="mobile-notice-backdrop" role="dialog" aria-modal="true">
      <div className="mobile-notice-card fullpage">
        <header className="mn-top">
          <div className="mn-title" aria-hidden>
            {title.split('').map((ch, i) => (
              <span key={i} className={`mn-letter ${ch === ' ' ? 'mn-space' : ''}`}>{ch}</span>
            ))}
          </div>
          <p className="mn-sub">Para una experiencia completa y visualmente óptima, visita este sitio desde tu PC de escritorio.</p>
        </header>

        <main className="mn-main">
          <div className="mn-visual">
            <div className="mn-glow" />
            <div className="mn-frame" aria-hidden>
              {/* Monitor SVG */}
              <img src={monitorUrl} alt="Monitor mockup" className="mn-monitor" />
            </div>
          </div>
        </main>

        <footer className="mn-footer">
          <div className="mn-actions">
            <button onClick={handleDismissPermanent} className="mn-btn mn-btn-primary">Entendido — Lo abriré en PC</button>
            <button onClick={handleContinueMobile} className="mn-btn mn-btn-secondary">Seguir en móvil</button>
          </div>
          <div className="mn-note">Puedes enviarte este enlace por email o abrirlo más tarde en tu ordenador.</div>
        </footer>
      </div>
    </div>
  );
};

export default MobileNotice;
