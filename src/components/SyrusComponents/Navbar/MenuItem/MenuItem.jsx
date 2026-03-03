import React from "react";
import styles from "./MenuItem.module.css";

/**
 * MenuItem Component
 * Individual menu item with hover interaction
 *
 * @param {Object} props - Component props
 * @param {Object} props.item - Menu item data (id, label, image, alt)
 * @param {number} props.index - Item index for ref assignment
 * @param {Function} props.onHover - Callback when item is hovered
 * @param {Function} props.onLeave - Callback when hover ends
 * @param {Function} props.onClick - Callback when item is clicked
 * @param {Function} props.setRef - Callback to set item ref for GSAP animations
 */
const MenuItem = ({
  item,
  index,
  onHover,
  onLeave,
  onClick,
  setRef,
  isActive,
}) => {
  const handleMouseEnter = () => {
    onHover(item);
  };

  const handleMouseLeave = () => {
    onLeave();
  };

  const handleClick = () => {
    onClick?.(item);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.(item);
    }
  };

  return (
    <div
      className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
      ref={(el) => setRef(el, index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {item.label}
    </div>
  );
};

export default MenuItem;
