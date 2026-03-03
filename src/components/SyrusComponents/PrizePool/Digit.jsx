
import { useState, useEffect } from "react";


export function Digit({ value, delay, isInView }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Phase 1: Rapidly cycle random numbers
    let iteration = 0;
    const maxIterations = 15 + Math.random() * 10; // Randomize duration per digit
    
    const interval = setInterval(() => {
      setDisplayValue(Math.floor(Math.random() * 10));
      iteration++;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayValue(value); // Set to actual target
        setIsLocked(true);      // Trigger the final slide animation
      }
    }, 60); // Speed of the scramble

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div className={styles.digitContainer}>
      <motion.div
        animate={isLocked ? { y: -displayValue * height } : { y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className={styles.digitList}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span ref={num === 0 ? ref : null} key={num} className={styles.singleDigit}>
            {isLocked ? num : displayValue} 
          </span>
        ))}
      </motion.div>
    </div>
  );
}