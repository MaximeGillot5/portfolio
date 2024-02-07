import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PreLoader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    // Vérifie si le préchargeur a déjà été affiché
    if (!localStorage.getItem("preloaderShown")) {
      // Affiche le préchargeur
      document.body.classList.add("no-scroll");
      // Récupérez les dimensions de la fenêtre pour définir le rayon initial du cercle
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const initialRadius = Math.sqrt(
        windowWidth * windowWidth + windowHeight * windowHeight
      );

      // Créez une forme de cercle qui couvre toute la page
      const circle = document.createElement("div");
      circle.style.width = circle.style.height = initialRadius * 2 + "px";
      circle.style.borderRadius = "50%";
      circle.style.background = "black"; // Couleur de fond de votre choix
      circle.style.position = "absolute";
      circle.style.top = circle.style.left = "50%";
      circle.style.transform = "translate(-50%, -50%)";
      circle.style.zIndex = "9999";
      document.body.appendChild(circle);

      const text = document.createElement("span");
      text.textContent = "Maxime Gillot";
      text.style.color = "white";
      text.style.fontSize = "24px";
      text.style.fontWeight = "bold";
      text.style.position = "absolute";
      text.style.top = "50%";
      text.style.left = "50%";
      text.style.transform = "translate(-50%, -50%)";
      circle.appendChild(text);
      document.body.appendChild(circle);

      // Animez la forme de cercle pour qu'elle se rétrécisse progressivement
      gsap.to(circle, {
        duration: 3.5,
        scale: 0,
        ease: "power2.inOut", // Courbe d'accélération pour une transition douce
        onComplete: () => {
          // Supprimez le cercle une fois l'animation terminée
          if (circle && circle.parentNode) {
            circle.parentNode.removeChild(circle);
            document.body.classList.remove("no-scroll");
            // Marque que le préchargeur a été affiché
            localStorage.setItem("preloaderShown", "true");
          }
        },
      });
    } else {
      // Cache le préchargeur s'il a déjà été affiché
      document.body.classList.remove("no-scroll");
    }

    // Gérez le nettoyage lors du démontage du composant
    return () => {
      if (preloaderRef.current) {
        preloaderRef.current.parentNode.removeChild(preloaderRef.current);
      }
    };
  }, []);

  return <div ref={preloaderRef}></div>;
};

export default PreLoader;
