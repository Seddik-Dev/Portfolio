import React from "react";
import Header1 from "./components/mvpblocks/header-1";
import Orb from "./components/Orb";
import TextType from "./components/TextType";
import AboutUs2 from "./components/mvpblocks/about-us-2";
import ScrollVelocity from "./components/ScrollVelocity";
import FooterAnimated from "./components/mvpblocks/footer-animated";
import CardFlip from "./components/mvpblocks/card-flip";

function App() {
  return (
    <>
      <div className=" w-full  overflow-x-hidden ">
        <div className="bg-black h-[100vh] relative">
          <Header1 />
          <TextType
            className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white text-4xl md:text-6xl font-bold text-center"
            text={[
              "Hey there!",
              "I'm Seddik Zaker.",
              "Welcome to my portfolio.",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          <Orb
            className="h-full absolute"
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
        <AboutUs2></AboutUs2>

        <ScrollVelocity
          texts={["React Bits", "Scroll Down"]}
          velocity={80}
          className="custom-scroll-text"
        />
        <div className="relative w-full h-screen text-white p-10">
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-30 text-white/20">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Content */}
          <div className="grid grid-cols-4 gap-4">
            <CardFlip></CardFlip>
            <CardFlip></CardFlip>
            <CardFlip></CardFlip>
            <CardFlip></CardFlip>
            <CardFlip></CardFlip>
            <CardFlip></CardFlip>
          </div>
        </div>
        <div>
          <FooterAnimated></FooterAnimated>
        </div>
      </div>
    </>
  );
}

export default App;
