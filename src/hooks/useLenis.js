import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Hook para inicializar Lenis smooth scroll
 * @param {Object} options - Configuración de Lenis
 * @returns {React.MutableRefObject<Lenis|null>} Referencia a la instancia de Lenis
 */
export const useLenis = (options = {}) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Inicializar Lenis con opciones personalizadas
        const lenis = new Lenis({
            duration: 1.8, // Duración más larga = más suave
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            ...options
        });

        lenisRef.current = lenis;

        // Función de animación
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
};

export default useLenis;
