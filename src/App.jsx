import React from "react";
import TextType from "./components/TextType";
import AboutUs2 from "./components/mvpblocks/about-us-2";
import ScrollVelocity from "./components/ScrollVelocity";
import FooterAnimated from "./components/mvpblocks/footer-animated";
import CardFlip from "./components/mvpblocks/card-flip";
import LiquidEther from "./components/LiquidEther";
import PillNav from "./components/PillNav";
import CodeBlock from "./components/mvpblocks/code-block-1";
import FloatingLines from "./components/FloatingLines";

function App() {
  return (
    <>
      <div className=" w-full  overflow-x-hidden ">
        <div className="relative bg-black h-[100vh] overflow-hidden">
          {/* ✅ Background layer — always at the bottom */}
          {/* <FloatingLines
            className="absolute inset-0 z-0"
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[10, 15, 20]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          /> */}


          {/* ✅ Content layer — above background */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 md:p-8 ">
            {/* Navbar at top */}
            <div className="w-full max-w-6xl mb-12">
              <PillNav />
            </div>

            {/* Main content: text + code side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center">
              <div className="text-center md:text-left">
                <TextType
                  className="text-white text-2xl md:text-4xl lg:text-6xl font-bold"
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
              </div>

              <div>
                <CodeBlock />
              </div>
            </div>
          </div>
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
