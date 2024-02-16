import React from "react";
import { Link } from "react-router-dom";
import DynamicText from "./DynamicText";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="lg:mr-60 lg:mt-48 sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Bonjour, je suis <span className="font-semibold">Maxime</span> 👋
      <br />
      Un développeur de 26 ans
      <br />
    </h1>
  ),
  2: (
    <div className="lg:mt-40">
      <InfoBox
        text="Déjà fait le tour ? Il reste quelques pages à visiter ! "
        link="/about"
        btnText="Allons-y !"
      />
    </div>
  ),
  3: (
    <div className="lg:mt-24">
      <InfoBox
        text="Un projet en tête ? Contactez-moi ! "
        link="/contact"
        btnText="Allons-y !"
      />
    </div>
  ),
  4: (
    <h1 className="lg:ml-96 lg:mt-40 sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Je travaille sur <DynamicText /> !
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
