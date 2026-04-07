"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(async () => {
    const btn = buttonRef.current;
    const canvas = canvasRef.current;
    if (!btn || !canvas || animating) return;

    setAnimating(true);

    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const next = !dark;

    // Radius to cover entire viewport from click point
    const maxR = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Step 1: Screenshot the current page onto the canvas
    const ctx = canvas.getContext("2d");
    if (!ctx) { setAnimating(false); return; }

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    // Fill canvas with current theme bg as fallback
    ctx.fillStyle = dark ? "#09090B" : "#FFFFFF";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Show canvas on top
    canvas.style.display = "block";

    // Step 2: Swap the theme underneath the canvas
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    // Step 3: Animate a growing circle cutout on the canvas
    // The canvas shows the OLD theme; the circle hole reveals the NEW theme below
    let start: number | null = null;
    const duration = 700;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentR = eased * maxR;

      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw full-screen rect with a circular hole
      ctx!.save();
      ctx!.fillStyle = dark ? "#09090B" : "#FFFFFF"; // old theme color
      ctx!.beginPath();
      ctx!.rect(0, 0, window.innerWidth, window.innerHeight);
      ctx!.arc(x, y, currentR, 0, Math.PI * 2, true); // cut out circle
      ctx!.closePath();
      ctx!.fill();
      ctx!.restore();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        canvas!.style.display = "none";
        setAnimating(false);
      }
    }

    // Give the DOM one frame to repaint with the new theme
    requestAnimationFrame(() => {
      requestAnimationFrame(animate);
    });
  }, [dark, animating]);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <>
      <motion.button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.08] dark:hover:text-slate-100"
        whileTap={{ scale: 0.9 }}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <AnimatePresence mode="wait">
          {dark ? (
            <motion.span
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <LuSun size={16} />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <LuMoon size={16} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Canvas overlay for ripple transition — sits above everything */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 99999, display: "none" }}
      />
    </>
  );
}
