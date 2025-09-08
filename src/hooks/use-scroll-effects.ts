import { useEffect } from "react";

type ParallaxConfig = {
  speed?: number; // positive moves slower than scroll, negative for opposite
  axis?: "y" | "x";
  from?: number; // starting translate value in px at top
  to?: number; // ending translate value in px at bottom
};

export function useScrollEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis: any = (window as any).lenis;

    // Fallback: if lenis isn't ready yet, try again on next frame
    if (!lenis) {
      const id = requestAnimationFrame(() => {});
      cancelAnimationFrame(id);
    }

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const parallaxNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    

    // Reveal using IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    revealNodes.forEach((el) => {
      el.classList.remove("revealed");
      io.observe(el);
    });

    // Parallax on Lenis scroll
    const updateParallax = () => {
      const viewportH = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      for (const el of parallaxNodes) {
        const rect = el.getBoundingClientRect();
        const elementTopInDoc = rect.top + scrollY;
        const progress = Math.min(
          1,
          Math.max(0, (scrollY + viewportH - elementTopInDoc) / (viewportH + rect.height))
        );

        const speed = parseFloat(el.dataset.speed || "0.25");
        const axis = (el.dataset.axis as ParallaxConfig["axis"]) || "y";
        const from = parseFloat(el.dataset.from || "0");
        const to = parseFloat(el.dataset.to || String((rect.height || 300) * speed));
        const value = from + (to - from) * progress;

        if (axis === "x") {
          el.style.transform = `translate3d(${value}px, 0, 0)`;
        } else {
          el.style.transform = `translate3d(0, ${value}px, 0)`;
        }
      }
    };

    const onLenis = () => updateParallax();

    // Attach to Lenis if available, also update on resize
    lenis?.on?.("scroll", onLenis);
    window.addEventListener("resize", updateParallax);
    updateParallax();

    return () => {
      lenis?.off?.("scroll", onLenis);
      window.removeEventListener("resize", updateParallax);
      io.disconnect();
      // cleanup inline styles
      for (const el of parallaxNodes) {
        el.style.transform = "";
      }
    };
  }, []);
}


