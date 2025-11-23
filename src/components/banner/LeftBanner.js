import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Full Stack Developer.",
      "Professional Coder.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Aleksandre Chokheli
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a Senior Full Stack Developer specializing in MERN, TypeScript, React.js, Next.js, and Nest.js.
          I build scalable, high-performance web applications with robust backends, dynamic frontends,
          and cloud deployments on AWS, Docker, and Kubernetes. Skilled in databases, APIs, real-time systems,
          and DevOps, I deliver production-ready solutions with precision and impact.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
