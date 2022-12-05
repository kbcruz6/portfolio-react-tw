import React, { useCallback, useMemo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //! Cantidad de particulas o distancia de links, segun tamaño screen
  let cantPart = windowWidth > 700 ? 30 : 13;
  let distLinks = windowWidth > 700 ? 750 : 800;

  //! Configurar options, comportamiento de las particulas
  const options = useMemo(() => {
    return {
      background: {
        color: "#0a192f",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
            // push, repulse, attract, bubble, pause, remove, trail, emitter, absorber
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 0,
          },
          repulse: {
            distance: 150,
          },
        },
      },
      particles: {
        number: {
          value: cantPart,
        },
        color: {
          value: "#fff",
          animation: {
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 10,
              decay: 0,
              sync: true,
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true,
            },
          },
        },
        links: {
          color: "#d53f8c",
          enable: true,
          distance: distLinks,
          opacity: 0.2,
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 2 },
        },
        opacity: {
          value: { min: 0.05, max: 0.1 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBackground;
