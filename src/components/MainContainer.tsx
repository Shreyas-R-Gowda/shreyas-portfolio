import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

import ErrorBoundary from "./ErrorBoundary";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      
      {/* Stable container for CharacterModel (children) to prevent Canvas unmount/remount crash */}
      <div 
        className="character-model-wrapper" 
        style={{ 
          display: isDesktopView ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        {children}
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>
              {/* On Mobile, the character model is moved into the landing scroll flow */}
              <div 
                className="mobile-character-container" 
                style={{ display: !isDesktopView ? "block" : "none" }}
              >
                {!isDesktopView && children} 
              </div>
            </Landing>
            <About />
            <WhatIDo />
            <Career />

            {/* Stable container for TechStack to prevent WebGL context loss/crash */}
            <div 
              className="techstack-wrapper" 
              style={{ display: isDesktopView ? "block" : "none" }}
            >
              <Suspense fallback={<div>Loading TechStack...</div>}>
                <ErrorBoundary fallback={<div className="tech-fallback">Tech Stack 3D failed to load.</div>}>
                  <TechStack />
                </ErrorBoundary>
              </Suspense>
            </div>

            <Work />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
