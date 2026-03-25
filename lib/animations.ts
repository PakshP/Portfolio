import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect when an element enters the viewport
 * Returns true when the element has been scrolled into view
 */
export function useInView(options?: { threshold?: number; margin?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.margin ?? "0px 0px -50px 0px",
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options?.threshold, options?.margin]);

  return { ref, isInView };
}

/**
 * Hook that enables smooth scroll behavior for the entire page
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Smooth scrolling is handled by CSS scroll-behavior property in globals.css
    // This hook is a placeholder for any future JS-based scroll enhancements
    return () => {
      // Cleanup
    };
  }, []);
}

