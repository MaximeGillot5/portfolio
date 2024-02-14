import React, { useEffect, useRef } from "react";
import transition from "../transition";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../assets/images/projectsimages/sportnerquality.png";
import Lenis from "@studio-freight/lenis";
import Picture2 from "../assets/images/projectsimages/portfolio-img-0.png";

import Word from "../components/Word";
import Parallax from "../components/Parallax";

const Projectsf = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container1,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: container3,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress1, [0, 4], [1, 4]);

  const scale2 = useTransform(scrollYProgress2, [0, 0.2], [1, 4]);

  const scale3 = useTransform(scrollYProgress3, [0, 0.2], [1, 4]);

  const xTranslation2 = useTransform(scrollYProgress2, [0, 1], [0, 10500]); // Par exemple, déplacez de 100 pixels vers la droite lorsque vous faites défiler à la fin

  return (
    <>
      <div className="mega-container bgblackproject">
        <div ref={container1} className="container-f">
          <div className="stickyf">
            <motion.div style={{ scale: scale1 }} className="">
              <div className="elf mt-72">
                <Parallax baseVelocity={-5}>SPORTNER SPORTNER</Parallax>
                <Parallax baseVelocity={5}>SPORTNER SPORTNER</Parallax>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="">
          <Word paragraph="Octobre 2022" />
          <Word paragraph="Réalisation de Sportner, un site mettant en relation des sportifs amateurs selon leur localisation et le sport choisi." />
        </div>
        <div ref={container2} className="container-g">
          <div className="stickyf">
            <motion.div
              style={{ scale: scale2, x: xTranslation2 }}
              className="divContainerf"
            >
              <Word paragraph="Ruby, Rails, React." />
            </motion.div>
          </div>
        </div>
        <div ref={container3} className="container-f">
          <div className="stickyf">
            <motion.div style={{ scale: scale3 }} className="">
              <div className="elf mt-72">
                <Parallax baseVelocity={-5}>TROX TROX TROX TROX</Parallax>
                <Parallax baseVelocity={5}>TROX TROX TROX TROX</Parallax>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default transition(Projectsf, "Projets");
