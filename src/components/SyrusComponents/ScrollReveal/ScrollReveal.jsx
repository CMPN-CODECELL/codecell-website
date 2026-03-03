import React, { useRef, useEffect, useCallback } from "react";
import styles from "./ScrollReveal.module.css";

/**
 * ScrollReveal — wraps a section with a dark overlay that smoothly fades
 * away as the section scrolls into view, creating a parallax-like reveal.
 *
 * Uses a rAF loop to continuously read the element's bounding rect, so it
 * works with any scroll implementation (native, Lenis, etc.). The overlay
 * is driven via a ref to avoid React re-render overhead on every frame.
 *
 * Black when ≤ 35% of viewport height is visible.
 * Smoothly reveals between 35% and 50%.
 * Fully revealed when ≥ 50% is visible.
 * Fades back to black symmetrically on scroll out.
 */
const LOW = 0.35; // 35% vh — fully black at or below this
const HIGH = 0.55; // 50% vh — fully revealed at or above this

export default function ScrollReveal({ children }) {
  const wrapperRef = useRef(null);
  const overlayRef = useRef(null);
  const rafRef = useRef(null);
  const running = useRef(true);

  const tick = useCallback(() => {
    if (!running.current) return;

    const el = wrapperRef.current;
    const overlay = overlayRef.current;

    if (el && overlay) {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const lowPx = vh * LOW;
      const highPx = vh * HIGH;

      // How much of the section is visible inside the viewport
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, vh);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // ≤ 35% → fully black (opacity 1)
      // 35%–50% → smooth fade (opacity 1→0)
      // ≥ 50% → fully revealed (opacity 0)
      let opacity;
      if (visibleHeight <= lowPx) {
        opacity = 1;
      } else if (visibleHeight >= highPx) {
        opacity = 0;
      } else {
        opacity = 1 - (visibleHeight - lowPx) / (highPx - lowPx);
      }

      overlay.style.opacity = String(opacity);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    running.current = true;
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      running.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {children}
      <div ref={overlayRef} className={styles.overlay} style={{ opacity: 1 }} />
    </div>
  );
}
