import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import Picture1 from "../assets/images/projectsimages/phonebg.png";

import Picture2 from "../assets/images/projectsimages/2.jpg";
import Picture5 from "../assets/images/projectsimages/sportnerlogo.png";

import Picture3 from "../assets/images/projectsimages/3.jpg";
import Picture4 from "../assets/images/projectsimages/sportnerblue.png";
import transition from "../transition";
import CTA from "../components/CTA";

gsap.registerPlugin(ScrollTrigger);

const word = "with gsap";
const word2 = "octobre 2022";

const Projectss = () => {
  const container = useRef(null);

  const title1 = useRef(null);

  const lettersRef = useRef([]);

  const imagesRef = useRef([]);
  const images = [Picture5, Picture4, Picture1];

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,

            start: "top bottom",

            end: "bottom top",

            scrub: true,
          },
        })

        .to(title1.current, { y: -50 }, 0)

        .to(imagesRef.current[1], { y: 210 }, 0)

        .to(imagesRef.current[2], { y: -395 }, 0);

      lettersRef.current.forEach((letter, i) => {
        tl.to(
          letter,
          {
            top: Math.floor(Math.random() * -40) - 25,
          },
          0
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="max-container">
      <div ref={container} className="container-project">
        <div className="body-project">
          <h1 className="head-text " ref={title1}>
            Mes Projets
          </h1>

          {/* <h1 className="head-text">TROX</h1> */}

          <div className="head-text base-gradient_text mt-10">
            <p className="p-project">
              {word2.split("").map((letter, i) => {
                return (
                  <span
                    className="blue-gradient_text"
                    key={`l_${i}`}
                    ref={(el) => (lettersRef.current[i] = el)}
                  >
                    {letter}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className="images-project">
          {images.map((image, i) => {
            return (
              <div
                key={`i_${i}`}
                ref={(el) => (imagesRef.current[i] = el)}
                className="imageContainer"
              >
                <img src={image} placeholder="blur" alt="image" fill />
              </div>
            );
          })}
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </div>
  );
};

export default transition(Projectss, "Projets");
