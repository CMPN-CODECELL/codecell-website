import React, { useEffect, useRef, useState, useMemo } from "react";

const HERO_BGS_DESKTOP = ["/GTA/gta-sunset.webp", "/GTA/hero-section-bg.webp"];
const HERO_BGS_MOBILE = [
  "/GTA/gta-sunset-mobile.webp",
  "/GTA/hero-section-bg-mobile.webp",
];
const MOBILE_BREAKPOINT = 640;
import styles from "./Hero.module.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

import syrusLogo from "/Syrus-26-logo.webp";
import syrusTextLogo from "/GTA/Syrus26-text-logo.svg";
import codecellLogo from "/codecell-logo.webp";
import vesitLogo from "/VESIT.png";
import unstopLogo from "/GTA/unstop-logo.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onCallMentor }) {
  const sectionRef = useRef(null);

  const baseWrapRef = useRef(null);
  const bgRef = useRef(null);
  const heroLogoRef = useRef(null);
  const charRef = useRef(null);

  const maskLayerRef = useRef(null);
  const logoFillRef = useRef(null);

  const titleCardRef = useRef(null);
  const titleLogoRef = useRef(null);
  const titleTextRef = useRef(null);
  const bigTitleRef = useRef(null);
  const btnRowRef = useRef(null);

  // Randomly pick a hero background (stable for session, changes on reload)
  const heroBgSrc = useMemo(() => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const bgs = isMobile ? HERO_BGS_MOBILE : HERO_BGS_DESKTOP;
    return bgs[Math.floor(Math.random() * bgs.length)];
  }, []);

  // Preload both images so the other one is cached for the next reload
  useEffect(() => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    const bgs = isMobile ? HERO_BGS_MOBILE : HERO_BGS_DESKTOP;
    bgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    /* ================================================================
       CONFIGURATION VARIABLES
       Change these values to tweak the animation without
       touching any logic below.
       ================================================================ */

    // -- Lenis smooth scroll --
    const LENIS_LERP = 0.08;
    const LENIS_WHEEL_MULTIPLIER = 1.0;

    // -- Scroll distance (viewport-height multiples) --
    let SCROLL_DISTANCE_VH = 2.5;

    // -- Layout / sizing --
    const SVG_ASPECT_RATIO = 261 / 171; // mask SVG viewBox ratio

    // -- Title logo CSS values (must match .titleLogo in CSS) --
    // Desktop: width: 15vw;  top: 48px;
    // Mobile:  width: 40vw;  top: 10%;
    const TITLE_LOGO_WIDTH_VW_DESKTOP = 0.15;
    const TITLE_LOGO_TOP_DESKTOP = 48; // px
    const TITLE_LOGO_WIDTH_VW_MOBILE = 0.4;
    const TITLE_LOGO_TOP_PCT_MOBILE = 0.1; // 10% of vh

    // -- Initial element states --
    let CHAR_INITIAL_SCALE = 1.1;
    let BG_INITIAL_SCALE = 1.05;
    let HERO_LOGO_OPACITY = 0.9;
    let MASK_START_W = 300; // vw – how zoomed-in the mask starts
    let MASK_START_CENTER_Y_PCT = 0.3; // initial Y center of mask as fraction of vh (0.30 = 30% from top)
    let MASK_FINAL_W_EXTRA = 0; // vw – extra width added to final mask (positive = more zoomed out)
    let LOGO_FILL_INITIAL_OPACITY = 0.3; // initial white fill opacity inside the mask (0–1)
    let TITLE_TEXT_INITIAL_Y = 40; // px – title text starts offset down

    // -- Phase 1: Character & BG zoom out --
    let P1_START = 0;
    let P1_DURATION = 0.1;
    let P1_CHAR_END_SCALE = 1;
    let P1_BG_END_SCALE = 1;
    let P1_EASE = "power2.out";

    // -- Phase 2: Mask layer fades in --
    let P2_START = 0.1;
    let P2_DURATION = 0.1;
    let P2_MASK_END_OPACITY = 1;
    let P2_EASE = "power1.in";

    // -- Phase 3: Parallel mask zoom-out & logo fill opacity --
    let P3_START = 0.1;
    let P3_DURATION = 0.58;
    let P3_LOGO_FILL_END_OPACITY = 1;
    let P3_EASE = "power1.in";

    // -- Phase 4: Mask fades out, title card appears --
    let P4_MASK_FADE_START = 0.7;
    let P4_MASK_FADE_DURATION = 0.13;
    let P4_MASK_FADE_EASE = "power1.in";
    let P4_BASE_FADE_START = 0.7;
    let P4_BASE_FADE_DURATION = 0.06;
    let P4_TITLE_CARD_START = 0.72;
    let P4_TITLE_CARD_DURATION = 0.1;
    let P4_TITLE_LOGO_START = 0.74;
    let P4_TITLE_LOGO_DURATION = 0.06;
    let P4_TITLE_TEXT_START = 0.76;
    let P4_TITLE_TEXT_DURATION = 0.12;

    /* ================================================================
       MOBILE OVERRIDES (screen width ≤ 640px)
       Override any variable above for smaller screens.
       ================================================================ */
    // No manual mobile overrides needed – values are computed from CSS
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      SCROLL_DISTANCE_VH = 1.25;
    }

    /* ================================================================
       END CONFIGURATION – logic below uses the variables above
       ================================================================ */

    // ---- Lenis (smooth scroll) ----
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: LENIS_LERP,
      wheelMultiplier: LENIS_WHEEL_MULTIPLIER,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    // ---- Compute final mask values to match .titleLogo exactly ----
    const section = sectionRef.current;
    const vw = section.clientWidth;
    const vh = section.clientHeight;
    const isMobile = vw <= MOBILE_BREAKPOINT;

    const logoWidth = isMobile
      ? vw * TITLE_LOGO_WIDTH_VW_MOBILE
      : vw * TITLE_LOGO_WIDTH_VW_DESKTOP;
    const logoTop = isMobile
      ? vh * TITLE_LOGO_TOP_PCT_MOBILE
      : TITLE_LOGO_TOP_DESKTOP;

    const maskHeight = logoWidth / SVG_ASPECT_RATIO;

    // Final --maskW in vw units (matches the title logo width) + extra zoom
    const finalMaskW = (logoWidth / vw) * 100 + MASK_FINAL_W_EXTRA;

    // Pixel-based center Y positions for linear visual motion
    const startCenterY = vh * MASK_START_CENTER_Y_PCT;
    const finalCenterY = logoTop + maskHeight / 2;

    // ---- GSAP / ScrollTrigger ----
    const ctx = gsap.context(() => {
      // -- Initial states --
      gsap.set(charRef.current, { xPercent: -50, scale: CHAR_INITIAL_SCALE });
      gsap.set(bgRef.current, { scale: BG_INITIAL_SCALE });
      gsap.set(heroLogoRef.current, { opacity: HERO_LOGO_OPACITY });

      gsap.set(maskLayerRef.current, {
        opacity: 0,
        "--maskW": MASK_START_W,
        "--maskCenterY": startCenterY,
      });

      gsap.set(logoFillRef.current, { opacity: LOGO_FILL_INITIAL_OPACITY });

      gsap.set(titleCardRef.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(titleLogoRef.current, { opacity: 0 });
      gsap.set(titleTextRef.current, { opacity: 0, y: TITLE_TEXT_INITIAL_Y });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * SCROLL_DISTANCE_VH}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* Phase 1: Zoom out characters & bg to original size */
      tl.to(
        charRef.current,
        { scale: P1_CHAR_END_SCALE, duration: P1_DURATION, ease: P1_EASE },
        P1_START,
      ).to(
        bgRef.current,
        { scale: P1_BG_END_SCALE, duration: P1_DURATION, ease: P1_EASE },
        P1_START,
      );

      /* Phase 2: Mask layer fades in + hero logo fades out (parallel) */
      tl.to(
        maskLayerRef.current,
        { opacity: P2_MASK_END_OPACITY, duration: P2_DURATION, ease: P2_EASE },
        P2_START,
      ).to(
        heroLogoRef.current,
        { opacity: 0, duration: P2_DURATION, ease: P2_EASE },
        P2_START,
      );

      /* Phase 3: Parallel mask zoom-out & white logo fill */
      tl.to(
        maskLayerRef.current,
        {
          "--maskW": finalMaskW,
          "--maskCenterY": finalCenterY,
          duration: P3_DURATION,
          ease: P3_EASE,
        },
        P3_START,
      );

      tl.to(
        logoFillRef.current,
        {
          opacity: P3_LOGO_FILL_END_OPACITY,
          duration: P3_DURATION,
          ease: P3_EASE,
        },
        P3_START,
      );

      /* Phase 4: Mask fades out, title card appears */
      tl.to(
        maskLayerRef.current,
        {
          opacity: 0,
          duration: P4_MASK_FADE_DURATION,
          ease: P4_MASK_FADE_EASE,
        },
        P4_MASK_FADE_START,
      )
        .to(
          baseWrapRef.current,
          { opacity: 0, duration: P4_BASE_FADE_DURATION },
          P4_BASE_FADE_START,
        )
        .to(
          titleCardRef.current,
          {
            opacity: 1,
            pointerEvents: "auto",
            duration: P4_TITLE_CARD_DURATION,
          },
          P4_TITLE_CARD_START,
        )
        .to(
          titleLogoRef.current,
          { opacity: 1, duration: P4_TITLE_LOGO_DURATION },
          P4_TITLE_LOGO_START,
        )
        .to(
          titleTextRef.current,
          { opacity: 1, y: 0, duration: P4_TITLE_TEXT_DURATION },
          P4_TITLE_TEXT_START,
        )
        .to(
          bigTitleRef.current.querySelectorAll(`.${styles.bigTitle}`),
          {
            backgroundPosition: "0% 100%",
            duration: 0.05,
            stagger: 0.04,
            ease: "power2.out",
          },
          P4_TITLE_TEXT_START + P4_TITLE_TEXT_DURATION,
        );

      /* Phase 5: HOLD – title card stays visible until next section */

      // Smooth-scroll through hero animation for returning visitors
      const hasVisited = localStorage.getItem("syrus26_visited");
      if (hasVisited) {
        const st = tl.scrollTrigger;
        requestAnimationFrame(() => {
          lenis.scrollTo(st.end, {
            duration: 2.5,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          });
        });
      } else {
        localStorage.setItem("syrus26_visited", "1");
      }

      // Refresh on resize
      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      return () => window.removeEventListener("resize", onResize);
    }, sectionRef);

    return () => {
      ctx.revert();
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // ---- Main animated render ----
  return (
    <section ref={sectionRef} className={styles.section}>
      {/* ===== Base hero layer (bg + characters) ===== */}
      <div ref={baseWrapRef} className={styles.baseWrap}>
        <img ref={bgRef} className={styles.heroBg} src={heroBgSrc} alt="" />
        {/* Syrus logo between bg and characters */}
        <img
          ref={heroLogoRef}
          className={styles.heroLogo}
          src={syrusTextLogo}
          alt="Syrus'26"
          draggable={false}
        />
        <img
          ref={charRef}
          className={styles.heroChar}
          src="/GTA/jason_lucia.webp"
          alt=""
        />
        <div className={styles.vignette} />
      </div>

      {/* ===== Mask layer ===== */}
      {/* Black background with logo-shaped transparent hole (inverted mask).
            A second child fills the logo shape with white (opacity animated). */}
      <div ref={maskLayerRef} className={styles.maskLayer}>
        <div className={styles.maskedCutout} />
        <div ref={logoFillRef} className={styles.logoFill} />
      </div>

      {/* ===== Final title card (holds for long scroll) ===== */}
      <div ref={titleCardRef} className={styles.titleCard}>
        <img
          ref={titleLogoRef}
          className={styles.titleLogo}
          src={syrusLogo}
          alt="Syrus'26"
          draggable={false}
        />

        <div className={styles.titleTextWrap} ref={titleTextRef}>
          <div className={styles.bigTitleDiv} ref={bigTitleRef}>
            <div className={styles.bigTitle}>
              COMING <br />
              17-18 MARCH
            </div>
          </div>
          <div className={styles.logoRow}>
            <img className={styles.orgLogo} src={codecellLogo} alt="CodeCell" />
            <div className={styles.subTitle}>CodeCell++</div>
            <img className={styles.orgLogo} src={vesitLogo} alt="VESIT" />
            <div className={styles.subTitle}>VESIT</div>
          </div>
          <div className={styles.btnRow} ref={btnRowRef}>
            {/* <a
              href="https://unstop.com/o/7ZVeoX4?utm_medium=Share&utm_source=tinkecmp45348&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroBtn}
            >
              <span className={styles.heroBtnText}>Register on</span>
              <img className={styles.unstopLogo} src={unstopLogo} alt="UnStop" />
            </a> */}
            {/* <a
              href="https://drive.google.com/file/d/182P7GQpMdOM29beUtPCn2NfvMRHeHDP3/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroBtn}
            >
              <span className={styles.heroBtnText}>View PS Allotment</span>
            </a> */}
            <button onClick={onCallMentor} className={styles.heroBtn}>
              <span className={styles.heroBtnText}>Call a Mentor</span>
            </button>
            <a
              href="https://discord.gg/kDAfGgjhPG"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.discordBtn}
            >
              <img
                className={styles.discordIcon}
                src="/GTA/discord-logo.webp"
                alt=""
                aria-hidden="true"
              />
              <span>Join Discord Server</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.scrollHint}>⌄</div>
    </section>
  );
}
