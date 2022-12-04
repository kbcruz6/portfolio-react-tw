import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
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
            quantity: 6,
          },
          repulse: {
            distance: 150,
          },
        },
      },
      particles: {
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
          distance: 70,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
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
