import React, { useCallback, useMemo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import MobileScreen from "./MobileScreen";

const ParticlesBackground = () => {
  const { mobileScreen } = MobileScreen();

  let cantPart = mobileScreen > 700 ? 80 : 50;
  let distLinks = mobileScreen > 700 ? 100 : 80;

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
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 3,
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
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 2 },
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
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
