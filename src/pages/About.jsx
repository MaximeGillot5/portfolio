import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import transition from "../transition";
gsap.registerPlugin(ScrollTrigger);
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  const techRowRef1 = useRef(null);
  const techRowRef2 = useRef(null);

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: techRowRef1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    tl1.fromTo(
      techRowRef1.current,
      {
        x: -1200,
      },
      {
        x: (index) =>
          index % 2 === 0
            ? gsap.utils.random(-600, -400)
            : gsap.utils.random(600, 400),
        ease: "power1.inOut",
      }
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: techRowRef2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    tl2.fromTo(
      techRowRef2.current,
      {
        x: -1200,
      },
      {
        x: (index) =>
          index % 2 === 0
            ? gsap.utils.random(-600, -400)
            : gsap.utils.random(600, 400),
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <section>
      <div className="about-container">
        <h1 className="head-text">
          Bonjour, je suis{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Maxime
          </span>
        </h1>

        <div className="text-about-me">
          Développeur Web Fullstack de 26 ans, adepte d'intégration 3D et prêt à
          relever de nouveaux défis au sein d'une équipe de passionnés.
        </div>
      </div>

      <div className="py-10 flex flex-col width-define overflow-hidden">
        {/* <h3 className="subhead-text">Mes Skills</h3> */}
        <div className="mt-16 flex gap-40 ml-12" ref={techRowRef1}>
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20 skill-item">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex gap-40 ml-12 " ref={techRowRef2}>
          {skills.reverse().map((skill, index) => (
            <div key={index} className="block-container w-20 h-20 skill-item">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-container">
        <div className="pb-16">
          <h3 className="subhead-text">Historique d'apprentissage</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
            <p>
              Voici un bref aperçu de ce qui a pu m'ammener, ces dernières
              années, à devenir développeur :
            </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </div>
    </section>
  );
};

export default transition(About, "About");
