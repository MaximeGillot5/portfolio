import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 2500) {
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

  return (
    <div className={`scroll-to-top ${isVisible ? "show" : ""}`}>
      <button
        style={{
          backgroundColor: "orangered",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: "999",
        }}
      >
        <Link to="/contact" className="btn">
          Contactez-moi
        </Link>
      </button>
    </div>
  );
};

export default ScrollToBottomButton;
