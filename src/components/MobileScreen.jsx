import React, { useState, useEffect } from "react";

const MobileScreen = () => {
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setMobileScreen(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { mobileScreen };
};

export default MobileScreen;
