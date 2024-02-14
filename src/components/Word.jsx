import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p ref={container} className="paragraph-ws">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const shadowOpacity = useTransform(progress, range, [0.5, 0]); // Opacity for the shadow effect
  return (
    <span className="word-ws">
      <motion.span
        style={{
          opacity: opacity,
          textShadow: "0px 0px 5px rgba(0,0,0," + shadowOpacity + ")",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
