"use client"

export default function CodeBlock() {
  return (
    <>
      <div className="relative w-full max-w-2xl rounded-xl p-0.5">
        <div className="rounded-xl bg-black p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.15)_inset] overflow-hidden relative">
          {/* Floating white dots background */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="flying-dot" style={{ animationDelay: "0s", left: "10%", top: "20%" }} />
            <div className="flying-dot" style={{ animationDelay: "2s", left: "80%", top: "10%" }} />
            <div className="flying-dot" style={{ animationDelay: "4s", left: "50%", top: "80%" }} />
            <div className="flying-dot" style={{ animationDelay: "1s", left: "20%", top: "60%" }} />
            <div className="flying-dot" style={{ animationDelay: "3s", left: "70%", top: "40%" }} />
            <div className="flying-dot" style={{ animationDelay: "2.5s", left: "30%", top: "30%" }} />
          </div>

          {/* Content container with higher z-index */}
          <div className="relative z-10">
            <div className="flex items-center justify-between pb-4">
              <span className="text-base font-semibold text-white">FullStack.jsx</span>
              <button className="rounded-full bg-cyan-400 px-3 py-1.5 text-xs font-medium text-black transition hover:bg-cyan-300">
                Copy
              </button>
            </div>

            <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-blue-100">
              <code>
                {String.raw`
`}
                <span className="text-cyan-300">import</span> React, {"{"} useEffect, useState {"}"}{" "}
                <span className="text-cyan-300">from</span> <span className="text-yellow-300">'react'</span>;
                <br />
                <span className="text-cyan-300">import</span> axios <span className="text-cyan-300">from</span>{" "}
                <span className="text-yellow-300">'axios'</span>;
                <br />
                <br />
                <span className="text-cyan-300">export async function</span>{" "}
                <span className="text-yellow-200">getProfile</span>() {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">return</span> await axios.get(
                <span className="text-yellow-300">'/api/profile'</span>
                );
                <br />
                {"}"}
                <br />
                <br />
                <span className="text-cyan-300">export default function</span>{" "}
                <span className="text-yellow-200">ProfileCard</span>() {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">const</span> [dev, setDev] = useState(
                <span className="text-yellow-300">null</span>);
                <br />
                <br />
                &nbsp;&nbsp;useEffect(() =&gt; {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;getProfile().then(res =&gt; setDev(res.data));
                <br />
                &nbsp;&nbsp;{"}"}, []);
                <br />
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">return</span> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span className="text-yellow-200">div</span> className=
                <span className="text-yellow-300">"text-blue-100"</span>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}dev ? (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;👨‍💻 Full-Stack Developer: {"{"}dev.name
                {"}"}&lt;/span&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) : <span className="text-yellow-300">"Loading..."</span>
                {"}"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
                <span className="text-yellow-200">div</span>&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-dots {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-400px) translateX(100px);
            opacity: 0;
          }
        }

        .flying-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
          animation: float-dots 8s ease-in infinite;
          pointer-events: none;
        }
      `}</style>
    </>
  )
}
