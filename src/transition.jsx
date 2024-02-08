import React from "react";
import { motion } from "framer-motion";

const transition = (OgComponent, pageName) => {
  const direction = Math.random() < 0.5 ? 1 : -1;
  return () => (
    <div>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{
          scaleX: 0,
          translateX: direction === 1 ? "-100vw" : "100vw",
        }}
        animate={{ scaleX: 0, translateX: 0 }}
        exit={{ scaleX: 1, translateX: direction === 1 ? "100vw" : "-100vw" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleX: 1, translateX: 0 }}
        animate={{
          scaleX: 0,
          translateX: direction === 1 ? "100vw" : "-100vw",
        }}
        exit={{ scaleX: 0, translateX: direction === 1 ? "-100vw" : "100vw" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-white text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 page-name">
            {pageName}
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default transition;
