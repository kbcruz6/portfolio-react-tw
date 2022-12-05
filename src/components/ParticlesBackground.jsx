import React, { useCallback, useMemo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  //! Configurar options, comportamiento de las particulas
  const options1 = useMemo(() => {
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
          distance: 80,
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

  const options2 = useMemo(() => {
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
          color: "#f00",
          enable: true,
          distance: 80,
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

  // const [mobileScreen, setMobileScreen] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleSize = () => {
  //     setMobileScreen(window.innerWidth);
  //     window.addEventListener("resize", handleSize);
  //   };
  //   return () => {
  //     window.removeEventListener("resize", handleSize);
  //   };
  // }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={window.innerWidth > 700 ? options1 : options2}
    />
  );
};

export default ParticlesBackground;

// celu ? options2 : options1
