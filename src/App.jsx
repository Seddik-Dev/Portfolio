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
import { TransitionPanel } from "./components/ui/transition-panel";
import { useState } from "react";
import ThreeDCardDemo from "./components/3dCard";
import { LayoutGridDemo } from "./components/LayoutGridIndex";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
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
      year: " 2024 - 2025",
      title: "Bachelor's Degree in WEB DEVELOPMENT FULL STACK AND DEVOPS",
      subtitle: "FSAC",
      description:
        "Training focused on the creation of modern web applications, the use of frameworks like Angular and Java JEE, and mastery of DevOps tools and the Linux environment.",
    },
    {
      year: " 2021 - 2023",
      title: "TECHNICIAN SPECIALIZED IN DIGITAL DEVELOPMENT",
      subtitle: "ISGI",
      description:
        " Training focused on the development of web applications with Python, JavaScript and PHP, as well as their frameworks React and Laravel. Introduction to project management and the use of its main collaborative tools",
    },
    {
      year: " 2021",
      title: "BACCALAUREATE IN PHYSICAL SCIENCES",
      subtitle: "G.S.MISBAH",
    },
  ];
  const elements = [
    {
      title: "Full Stack Web Developer",
      subtitle:
        "MABORNE – Fabricant de bornes tactiles et de solutions phygitales  | 2023 - Present",
      content: `Development of advanced web solutions for interactive kiosks, including intuitive interface design, multimedia feature integration, and rigorous performance optimization. Active participation in the establishment of robust architectures, the resolution of complex technical problems, and daily collaboration within agile teams to ensure quality, fluidity, and continuous project evolution.`,
    },
    {
      title: "Full Stack Web Developer",
      subtitle:
        "Stage at the Regional Direction of OFPPT, Casablanca |  02/2023 - 03/2023",
      content: `Training focused on the development of web applications using Python, JavaScript and PHP, with a thorough practice of their main modern frameworks such as React and Laravel. The program also includes structured training in project management, covering methodologies, team organization, and the use of essential collaborative tools to ensure effective tracking, fluid communication, and optimal coordination within a digital project.`,
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
          <div className="absolute inset-0 -z-10 dark:opacity-30 bg-black text-gray-800 pointer-events-none ">
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
          <div className="max-w-7xl mx-auto w-full">
            {/* --- Foreground Content (Centered Grid) --- */}
            <div className="relative w-full flex items-center justify-center ">
              <TrueFocus
                sentence="About Me"
                manualMode={false}
                blurAmount={5}
                borderColor="#3DFFFF"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 z-20 relative">
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
                  collaborative environments where innovation and performance
                  are at the heart of projects.
                </div>

                <div className="mt-12">
                  <blockquote className="mt-6 border-l-2 pl-6 italic">
                    Building things that make life easier, one commit at a time.
                  </blockquote>
                </div>
              </div>
            </div>
            <div>
              <ScrollTimeline
                title="My Education"
                events={events}
                subtitle="Scroll to explore My Education"
                progressIndicator={true}
                cardAlignment="alternating"
                revealAnimation="fade"
              />
            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 sm:grid-cols-2 ">
              <div>
                <div className="relative w-full flex items-center justify-center ">
                  <TrueFocus
                    sentence="My Experiences"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#3DFFFF"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                  />
                </div>
                <div className="mt-15">
                  <div className="mb-4 flex space-x-2">
                    {elements.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`rounded-md px-3 py-1 text-sm font-medium ${activeIndex === index
                          ? "bg-blue-500 text-white dark:bg-zinc-800 dark:text-zinc-100"
                          : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                          }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                  <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
                    <TransitionPanel
                      activeIndex={activeIndex}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      variants={{
                        enter: { opacity: 0, y: -50, filter: "blur(4px)" },
                        center: { opacity: 1, y: 0, filter: "blur(0px)" },
                        exit: { opacity: 0, y: 50, filter: "blur(4px)" },
                      }}
                    >
                      {elements.map((item, index) => (
                        <div key={index} className="py-2">
                          <h3 className="mb-2 font-medium text-white dark:text-zinc-100">
                            {item.subtitle}
                          </h3>
                          <p className="text-white dark:text-zinc-400 text-justify">
                            {item.content}
                          </p>
                        </div>
                      ))}
                    </TransitionPanel>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative w-full flex items-center justify-center ">
                  <TrueFocus
                    sentence="My Certifications"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#3DFFFF"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                  />
                </div>
                <div>
                  <ThreeDCardDemo />
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-full flex items-center justify-center ">
                <TrueFocus
                  sentence="Some Projects"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#3DFFFF"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                />
              </div>
              <LayoutGridDemo></LayoutGridDemo>
            </div>
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
