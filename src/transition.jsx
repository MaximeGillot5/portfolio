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
          scaleY: 0,
          translateY: direction === 1 ? "-100vh" : "100vh",
        }}
        animate={{ scaleY: 0, translateY: 0 }}
        exit={{ scaleY: 1, translateY: direction === 1 ? "100vh" : "-100vh" }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1, translateY: 0 }}
        animate={{
          scaleY: 0,
          translateY: direction === 1 ? "100vh" : "-100vh",
        }}
        exit={{ scaleY: 0, translateY: direction === 1 ? "-100vh" : "100vh" }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1], delay: 1 }}
      >
        <motion.div
          initial={{ opacity: 1 }} // Opacité initiale à 1
          animate={{ opacity: 0 }} // Opacité finale à 0
          transition={{ duration: 2 }}
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
