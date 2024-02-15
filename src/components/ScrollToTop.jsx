import React, { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Vérifie si la position de défilement verticale est supérieure à 100 pixels
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Ajoute un écouteur d'événement de scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoie l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <button>
        <FaLongArrowAltUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
