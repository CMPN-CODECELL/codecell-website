import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import Hamburger from "../Hamburger/Hamburger";
import MenuOverlay from "../MenuOverlay/MenuOverlay";
import { useMenuAnimation } from "../hooks/useMenuAnimation";
import { MENU_ITEMS } from "../config/menuConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Refs for animation targets
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const backdropRef = useRef(null);
  const sidebarRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const menuItemsRef = useRef([]);

  // Lock ALL scroll when sidebar is open.
  // Lenis reads wheel/touch deltas and calls scrollTo() itself, so
  // we must stopImmediatePropagation at capture phase to kill the event
  // before it ever reaches Lenis or native scroll.
  useEffect(() => {
    if (!isOpen) return;

    const stop = (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    const stopKeys = (e) => {
      const keys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];
      if (keys.includes(e.key)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", stop, { passive: false, capture: true });
    window.addEventListener("touchmove", stop, {
      passive: false,
      capture: true,
    });
    window.addEventListener("keydown", stopKeys, { capture: true });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", stop, { capture: true });
      window.removeEventListener("touchmove", stop, { capture: true });
      window.removeEventListener("keydown", stopKeys, { capture: true });
    };
  }, [isOpen]);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = MENU_ITEMS.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Show logo + navbar background after hero section scrolls out of view
  useEffect(() => {
    // The hero section is the pinned section inside SyrusGTAHero.
    // ScrollTrigger wraps it in a pin-spacer div, so we target the
    // first <section> child of .syrus-page.
    const hero = document.querySelector(
      ".syrus-page > section, .syrus-page > div > section",
    );
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hero is out of view when it's NOT intersecting
        setShowLogo(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // GSAP Animation Hook
  useMenuAnimation(isOpen, {
    overlayRef,
    backdropRef,
    sidebarRef,
    line1Ref,
    line2Ref,
    menuItemsRef,
  });

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`${styles.navbar} ${showLogo ? styles.navScrolled : ""}`}
      >
        <div
          className={`${styles.logo} ${showLogo ? styles.logoVisible : styles.logoHidden}`}
        >
          SYRUS
        </div>
        <div className={styles.navActions}>
          <a
            href="https://unstop.com/o/7ZVeoX4?utm_medium=Share&utm_source=tinkecmp45348&utm_campaign=Online_coding_challenge"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.navBtn} ${showLogo ? styles.navBtnVisible : styles.navBtnHidden}`}
          >
            <span className={styles.navBtnLabel}>Register on</span>
            <img
              className={styles.navBtnIcon}
              src="/GTA/unstop-logo.webp"
              alt="UnStop"
            />
          </a>
          <a
            href="https://discord.gg/kDAfGgjhPG"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.navBtn} ${styles.discordNavBtn} ${showLogo ? styles.navBtnVisible : styles.navBtnHidden}`}
          >
            <img
              className={styles.navBtnIcon}
              src="/GTA/discord-logo.webp"
              alt="Discord"
            />
            <span className={styles.navBtnLabel}>Discord</span>
          </a>
          <Hamburger
            isOpen={isOpen}
            toggle={toggleMenu}
            line1Ref={line1Ref}
            line2Ref={line2Ref}
          />
        </div>
      </nav>
      <MenuOverlay
        isOpen={isOpen}
        overlayRef={overlayRef}
        backdropRef={backdropRef}
        sidebarRef={sidebarRef}
        menuItemsRef={menuItemsRef}
        navbarRef={navbarRef}
        onRequestClose={closeMenu}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
