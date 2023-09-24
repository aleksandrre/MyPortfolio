import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-COMMERCE WEBSITE"
          des=" Built with React and Ant Design, our e-commerce website is a visually stunning shopping platform that leverages the power of DummyJSON to create dynamic and engaging content."
          src={projectOne}
          gitLink="https://github.com/aleksandrre/AntDisignWebApp"
          siteLink="https://ant-disign-web-app.vercel.app/"
        />
        <ProjectsCard
          title="SLOT GAME"
          des=" In this project, there's a slot featuring a moving ball within a rectangle. The rectangle comprises both unprofitable and profitable sections, and on each spin, your aim is to land the ball exclusively on the winning sections."
          src={projectTwo}
          gitLink="https://github.com/aleksandrre/badSlot"
          siteLink="https://bad-slot.vercel.app/"
        />
        <ProjectsCard
          title="TAX_APP"
          des=" The tax client application meticulously developed using Next.js, Tailwind CSS, Mapbox GL JS, and Firebase. This innovative app serves as a streamlined platform for direct communication with tax professionals."
          src={projectThree}
          gitLink="https://github.com/aleksandrre/taxdriverapp"
          siteLink="https://taxdriverapp.vercel.app/"
        />
        <ProjectsCard
          title="MeteorMaster"
          des=" Our weather application is a valuable tool designed to provide you with up-to-date weather information for any city you choose, ensuring you stay well-informed about current and forecasted weather conditions."
          src={projectFour}
          gitLink="https://github.com/aleksandrre/Weatherapp"
          siteLink="https://weatherapp-kohl-rho.vercel.app/"
        />
        <ProjectsCard
          title="CAR_EXPLORER"
          des=" Our new CarsSite, powered by Next.js, Tailwind CSS, TypeScript, Rapid API, and Headless UI, provides a comprehensive platform to explore a wide range of cars. Easily access detailed information on numerous car models and apply advanced filters based on manufacturing dates."
          src={projectFive}
          gitLink="https://github.com/aleksandrre/CarsSite"
          siteLink="https://cars-site-orcin.vercel.app/"
        />
        <ProjectsCard
          title="QuizMaster"
          des=" Our new QuizGame app, built using TypeScript, React, and Styled Components, delivers an engaging and interactive gaming experience. Dive into a world of quizzes, challenge your knowledge, and have fun!"
          src={projectSix}
          gitLink="https://github.com/aleksandrre/QuizApp"
          siteLink="https://quiz-app-six-jet.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
