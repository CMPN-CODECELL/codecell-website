import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const useMenuAnimation = (isOpen, refs) => {
  const {
    overlayRef,
    backdropRef,
    sidebarRef,
    line1Ref,
    line2Ref,
    menuItemsRef,
  } = refs;
  const tl = useRef();

  useGSAP(
    () => {
      // Initial states
      gsap.set(overlayRef.current, { visibility: "hidden" });
      gsap.set(backdropRef.current, { opacity: 0 });
      gsap.set(sidebarRef.current, { x: "100%" });

      if (menuItemsRef.current && menuItemsRef.current.length > 0) {
        const validItems = menuItemsRef.current.filter((el) => el !== null);
        if (validItems.length > 0) {
          gsap.set(validItems, { opacity: 0, x: 20 });
        }
      }

      // Build timeline
      tl.current = gsap.timeline({
        paused: true,
        onStart: () => {
          gsap.set(overlayRef.current, { visibility: "visible" });
        },
        onReverseComplete: () => {
          gsap.set(overlayRef.current, { visibility: "hidden" });
        },
      });

      // Backdrop fade
      tl.current.to(
        backdropRef.current,
        { opacity: 1, duration: 0.3, ease: "power2.out" },
        0,
      );

      // Sidebar slide in
      tl.current.to(
        sidebarRef.current,
        { x: "0%", duration: 0.35, ease: "power3.out" },
        0,
      );

      // Hamburger → X
      tl.current.to(
        line1Ref.current,
        { y: 5, rotate: 45, scaleX: 0.9, duration: 0.25, ease: "power3.inOut" },
        0,
      );
      tl.current.to(
        line2Ref.current,
        {
          y: -5,
          rotate: -45,
          scaleX: 0.9,
          duration: 0.25,
          ease: "power3.inOut",
        },
        0,
      );

      // Menu items stagger
      if (menuItemsRef.current && menuItemsRef.current.length > 0) {
        const validItems = menuItemsRef.current.filter((el) => el !== null);
        if (validItems.length > 0) {
          tl.current.to(
            validItems,
            {
              opacity: 1,
              x: 0,
              duration: 0.25,
              stagger: 0.04,
              ease: "power2.out",
            },
            0.15,
          );
        }
      }
    },
    { scope: overlayRef },
  );

  // Playback control
  useGSAP(() => {
    if (!tl.current) return;

    if (isOpen) {
      tl.current.timeScale(1).play();
      document.body.style.overflow = "hidden";
    } else {
      // Fast reverse (1.4× speed)
      tl.current.timeScale(1.4).reverse();
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return tl;
};
