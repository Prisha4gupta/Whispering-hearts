import { useEffect, useRef } from "react";
import Lenis from "lenis";

export type UseLenisOptions = ConstructorParameters<typeof Lenis>[0];

export function useLenis(options?: UseLenisOptions) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.documentElement.classList.remove("lenis");
      document.body.classList.remove("lenis-smooth");
      return;
    }

    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });

    lenisRef.current = lenis;

    // Expose globally for imperative access (e.g., from components or listeners)
    (window as any).lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onResize = () => lenis.resize();
    window.addEventListener("resize", onResize);

    // Intercept internal anchor clicks for smooth scrolling
    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;
      event.preventDefault();
      lenis.scrollTo(el, { offset: -80 });
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onDocumentClick);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      (window as any).lenis = undefined;
      document.removeEventListener("click", onDocumentClick);
    };
  }, [options]);

  return lenisRef;
}


