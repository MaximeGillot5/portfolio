import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import styles from "./style.module.scss";

const words = [
  "Maxime Gillot",
  "Développeur Web",
  "Three.js",
  "React",
  "Node",
  "Ruby",
  "Rails",
  "Bienvenue",
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [hasVisited, setHasVisited] = useState(false);

  const resetVisitedTimeout = setTimeout(() => {
    localStorage.removeItem("hasVisited");
    setHasVisited(false);
  }, 5 * 60 * 1000); // 5 minutes

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const visited = localStorage.getItem("hasVisited");
    if (visited) {
      setHasVisited(true);
    } else {
      localStorage.setItem("hasVisited", "true");
      return () => clearTimeout(resetVisitedTimeout);
    }
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;

    const timeoutId = setTimeout(
      () => {
        setIndex((prevIndex) => prevIndex + 1);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timeoutId);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <>
      {!hasVisited && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className={styles.introduction}
        >
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </motion.div>
      )}
    </>
  );
}
