// import React, { useState, useEffect } from "react";

// const MobileScreen = () => {
//   const [mobileScreen, setMobileScreen] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleWindowResize = () => setMobileScreen(window.innerWidth);
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   return { mobileScreen };
// };

// export default MobileScreen;

// import React, { useState, useEffect } from "react";

// const WindowWidth = () => {
//   const [windowWidth, setwindowWidth] = useState(window.innerWidth);
//   const handleResize = () => {
//     setwindowWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return { windowWidth };
// };

// export default WindowWidth;
