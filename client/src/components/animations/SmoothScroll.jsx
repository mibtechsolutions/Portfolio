import { useEffect, createContext, useContext, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, scrollToTop }}>
      {children}
    </LenisContext.Provider>
  );
};

export default SmoothScroll;
