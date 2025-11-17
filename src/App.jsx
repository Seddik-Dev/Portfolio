import React from "react";
import Header1 from "./components/mvpblocks/header-1";
import Orb from "./components/Orb";
import TextType from "./components/TextType";
import AboutUs2 from "./components/mvpblocks/about-us-2";

function App() {
  return (
    <>
      <div className=" w-full  overflow-x-hidden ">
        <div className="bg-black h-[100vh] relative">
        <Header1 />
        <TextType className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-white text-4xl md:text-6xl font-bold text-center"
          text={["Hey there!", "I'm Seddik Zaker.", "Welcome to my portfolio."]}
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
      </div>
    </>
  );
}

export default App;
