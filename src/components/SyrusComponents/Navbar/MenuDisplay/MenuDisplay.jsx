import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./MenuDisplay.module.css";

const MenuDisplay = ({ activeItem, defaultItem }) => {
  const resolved = activeItem ?? defaultItem;
  const resolvedSrc = resolved?.image;
  const resolvedAlt = resolved?.alt ?? "";

  const rootRef = useRef(null);
  const currentImgRef = useRef(null);
  const nextImgRef = useRef(null);

  const [current, setCurrent] = useState(() => {
    if (!resolvedSrc) return null;
    return { src: resolvedSrc, alt: resolvedAlt };
  });
  const [next, setNext] = useState(null);

  const currentRef = useRef(current);
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    if (!resolvedSrc) return;

    if (!currentRef.current) {
      setCurrent({ src: resolvedSrc, alt: resolvedAlt });
      return;
    }

    if (currentRef.current.src === resolvedSrc) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCurrent({ src: resolvedSrc, alt: resolvedAlt });
      setNext(null);
      return;
    }

    setNext({ src: resolvedSrc, alt: resolvedAlt });
  }, [resolvedSrc, resolvedAlt]);

  useEffect(() => {
    if (!current || !next) return;
    if (!currentImgRef.current || !nextImgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.killTweensOf([currentImgRef.current, nextImgRef.current]);

      gsap.set(currentImgRef.current, { opacity: 1, scale: 1 });
      gsap.set(nextImgRef.current, { opacity: 0, scale: 1.02 });

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrent(next);
          setNext(null);
        },
      });

      tl.to(
        currentImgRef.current,
        {
          opacity: 0,
          scale: 1.02,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      ).to(
        nextImgRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "power2.inOut",
        },
        0,
      );
    }, rootRef);

    return () => ctx.revert();
  }, [current, next]);

  if (!current) return null;

  return (
    <div className={styles.menuDisplay} ref={rootRef}>
      <div className={styles.imageWrapper}>
        <img
          ref={currentImgRef}
          src={current.src}
          alt={current.alt ?? ""}
          className={styles.image}
          draggable={false}
        />
        {next ? (
          <img
            ref={nextImgRef}
            src={next.src}
            alt={next.alt ?? ""}
            className={styles.image}
            draggable={false}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MenuDisplay;
