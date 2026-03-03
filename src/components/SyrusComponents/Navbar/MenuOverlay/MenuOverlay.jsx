import React, { useEffect, useRef } from "react";
import { MENU_ITEMS } from "../config/menuConfig";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuOverlay.module.css";

/**
 * MenuOverlay Component
 * Right sidebar overlay with backdrop.
 * Clicking a nav link closes instantly and scrolls to the target section.
 */
const MenuOverlay = ({
  isOpen,
  overlayRef,
  backdropRef,
  sidebarRef,
  menuItemsRef,
  navbarRef,
  onRequestClose,
  activeSection,
}) => {
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      isNavigatingRef.current = false;
    }
  }, [isOpen]);

  /** Close sidebar when backdrop is clicked */
  const handleBackdropClick = () => {
    onRequestClose?.();
  };

  /** Handle nav link click — close immediately & scroll instantly */
  const handleItemClick = (item) => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;

    const href = item?.href;

    // Close the menu right away
    onRequestClose?.();

    // Restore scroll ability
    if (typeof document !== "undefined" && document.body) {
      document.body.style.overflow = "";
    }

    if (!href || typeof window === "undefined") {
      isNavigatingRef.current = false;
      return;
    }

    const hash = href.startsWith("#") ? href : `#${href}`;
    const target = document.querySelector(hash);

    window.history.pushState(null, "", hash);

    if (!target) {
      window.location.hash = hash;
      isNavigatingRef.current = false;
      return;
    }

    // Wait briefly for the menu-close animation to finish,
    // then jump so the section top is exactly at the screen top.
    // Using "instant" behavior avoids conflicts with Lenis smooth-scroll.
    requestAnimationFrame(() => {
      setTimeout(() => {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
        isNavigatingRef.current = false;
      }, 350);
    });
  };

  /** Unused hover/leave kept as no-ops for MenuItem compatibility */
  const handleItemHover = () => {};
  const handleItemLeave = () => {};

  const setItemRef = (el, index) => {
    if (menuItemsRef.current) {
      menuItemsRef.current[index] = el;
    }
  };

  return (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${isOpen ? styles.isOpen : ""}`}
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className={styles.backdrop}
        onClick={handleBackdropClick}
      />

      {/* Sidebar */}
      <div ref={sidebarRef} className={styles.sidebar}>
        {MENU_ITEMS.map((item, index) => (
          <MenuItem
            key={item.id}
            item={item}
            index={index}
            onHover={handleItemHover}
            onLeave={handleItemLeave}
            onClick={handleItemClick}
            setRef={setItemRef}
            isActive={activeSection === item.href.replace("#", "")}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
