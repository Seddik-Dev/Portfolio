import React from "react";
import TextType from "./components/TextType";
import FooterAnimated from "./components/mvpblocks/footer-animated";
import CardFlip from "./components/mvpblocks/card-flip";
import CodeBlock from "./components/mvpblocks/code-block-1";
import { SparklesCore } from "./components/ui/sparkles";
import { House, Info, BriefcaseBusiness, Contact } from "lucide-react";
import Dock from "./components/Dock";
import TrueFocus from "./components/TrueFocus";
import { ScrollTimeline } from "./components/ScrollTimeLine";

function App() {
  const items = [
    {
      icon: <House size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <Info size={18} />,
      label: "About",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <BriefcaseBusiness size={18} />,
      label: "Experience",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <Contact size={18} />,
      label: "Contact",
      onClick: () => alert("Settings!"),
    },
  ];
  const events = [
    {
      year: "2023",
      title: "Major Achievement",
      subtitle: "Organization Name",
      description: "Description of the achievement.",
    },
    {
      year: "2022",
      title: "Important Milestone",
      subtitle: "Organization Name",
      description: "Details about the milestone.",
    },
  ];
  return (
    <div className="relative">
      <div className=" w-full overflow-x-hidden ">
        <div className="relative bg-black h-[100vh] overflow-hidden">
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 md:p-8 ">
            <SparklesCore
              id="tsparticles"
              background="transparent"
              particleDensity={300}
              className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            />
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
        <div className="relative w-full min-h-screen text-white p-10">
          {/* --- Background Pattern --- */}
          <div className="absolute inset-0 -z-10 dark:opacity-30 bg-black text-gray-800 pointer-events-none">
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

          {/* --- Foreground Content (Centered Grid) --- */}
          <div className="relative w-full flex items-center justify-center ">
            <TrueFocus
              sentence="About Me"
              manualMode={false}
              blurAmount={5}
              borderColor="green"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-10 z-20 relative">
            <div className="flex items-center justify-center">
              <CardFlip frontImage="/images/Seddik.jpg" />
            </div>

            <div className="rounded-xl h-full flex flex-col">
              <div className="text-2xl font-semibold text-justify">
                Passionate Full Stack Web Developer, with solid experience in
                design and development of dynamic and efficient web
                applications. I create complete solutions combining code
                quality, user experience fluidity and technical efficiency.
                Rigorous, curious and results-oriented, I thrive in
                collaborative environments where innovation and performance are
                at the heart of projects.
              </div>

              <div className="mt-12">
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  Building things that make life easier, one commit at a time.
                </blockquote>
              </div>
            </div>
          </div>

          <div className="relative w-full flex items-center justify-center mt-20">
            <TrueFocus
              sentence="My Education"
              manualMode={false}
              blurAmount={5}
              borderColor="green"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
        <div>
          <ScrollTimeline
            events={events}
            subtitle="Scroll to explore the timeline"
            progressIndicator={true}
            cardAlignment="alternating"
            revealAnimation="fade"
          />
        </div>
        </div>

        <div>
          <FooterAnimated></FooterAnimated>
        </div>
      </div>

      <div>
        <Dock
          className="fixed bottom-0 z-50"
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  );
}

export default App;
