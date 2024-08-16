import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import React from "react";
import LearnSection from "./Learn/LearnSection";
import EarnSection from "./Earn/EarnSection";
function ParallaxOverlapping() {
  return (
    <ParallaxProvider>
      <div style={{ height: "200vh", position: "relative" }}>
        <Parallax speed={-10}>
          <div
            style={{
              // position: "absolute",
              top: "40%",
              // left: "50%",
              transform: "translate(50%, -50%)",
              zIndex: 1,
              color: "#fff",
              // backgroundColor: "#FF5733",
              padding: "40px",
            }}
          >
          <LearnSection/>
          </div>
        </Parallax>

        <Parallax speed={-5}>
          <div
            style={{
              // position: "absolute",
              top: "60%",
              // left: "50%",
              transform: "translate(-50%, 50%)",
              zIndex: 5,
              color: "#fff",
              // backgroundColor: "#333",
              padding: "40px",
            }}
          >
          <EarnSection/>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default ParallaxOverlapping;
