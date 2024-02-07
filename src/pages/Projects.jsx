import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/images/portfolio6.png";
import Img2 from "../assets/images/portfolioblack.png";
import Img3 from "../assets/images/portfolio5.png";
import CTA from "../components/CTA";
import transition from "../transition";

const Projects = () => {
  return (
    <section className="max-container" id="project">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-x-10"
        >
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="head-text base-gradient_text">Mes projets</h2>
              <p className="mt-5 flex flex-col gap-3 text-slate-500 mb-10">
                Voici une sélection de mes derniers projets, vous pouvez bien
                évidemment retrouver la totalité de mon travail sur mon Github
                personnel !
              </p>
              <a href="https://github.com/MaximeGillot5" target="_blank">
                <button className="btn btn-sm">Tous mes projets</button>
              </a>
            </div>

            <div className="group relative overflow-hidden border-2 border-grey rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-white">
                <span className="">
                  Création d'un site de prêt d'outils entre particuliers
                  <br />
                  Ruby On Rails, React.js
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white">
                <span className="text-3xl project-gradient_text">TROX</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:gap-y-4 md:gap-y-11 sm:gap-y-10 max-sm:gap-y-10 ">
            <div className="group relative overflow-hidden border-2 border-grey rounded-xl xl:mb-7">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 right-6 group-hover:bottom-24 transition-all duration-500 z-50 text-white">
                <span className="">
                  Création d'un site mettant en relation des sportifs amateurs
                  selon leur localisation ! Back Ruby et front React.js.
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white">
                <span className="text-3xl project-gradient_text">SPORTNER</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-grey rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 right-6 group-hover:bottom-24 transition-all duration-500 z-50 text-white">
                <span className="">
                  Mise en page d'une animation d'étoiles filantes en React,
                  création d'une page de contact et d'une DA précise.
                </span>
              </div>
              <div className="absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50 text-white">
                <span className="text-3xl project-gradient_text">
                  Portfolio 2023
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <hr className="border-slate-200 mt-20" />

      <CTA />
    </section>
  );
};

export default transition(Projects, "Projets");
