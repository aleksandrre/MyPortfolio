import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  boon,
  kidea,
  carizma,
  nexusAuto
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
          title="Nexus Auto (Car Import & Auction Platform)"
          des={
            <>
              Developed a comprehensive <strong>Car Import & Auction platform</strong> that streamlines the process of purchasing and transporting vehicles from global markets. The system features a real-time <strong>Auction Integration</strong> (Copart, IAAI), an advanced <strong>Shipping Calculator</strong>, and a custom <strong>Order Tracking</strong> system. Built for high performance and reliability, ensuring users can easily manage their vehicle imports from the US and UAE to Georgia.
            </>
          }
          src={nexusAuto} 
          gitLink=""
          siteLink="https://www.nexusauto.ge/"
        />
        <ProjectsCard
          title="BOON (Multi-Tenant Blockchain Platform)"
          des={
            <>
              Designed and engineered a robust <strong>Multi-Tenant platform</strong> on the <strong>MERN Stack</strong> to connect businesses and users. Users complete tasks to earn rewards, with the mechanism secured by <strong>Blockchain</strong> technology. Infrastructure is optimized using <strong>DigitalOcean, Vercel, Cloudflare, and AWS S3</strong>, ensuring global performance and data integrity.
            </>
          } src={boon}
          gitLink=""
          siteLink="https://boonhq.io/"
        />
        <ProjectsCard
          title="EDUCATION & REGISTRATION PLATFORM (Kidea)"
          des={
            <>
              Developed a dedicated educational platform serving as a central hub for Kidea's course offerings. The system allows users to <strong>browse available courses</strong>, directly <strong>register</strong> for selected programs, and <strong>initiate communication</strong> with the organization. It functions as the primary user-facing tool for enrollment and information access.
            </>
          }
          src={kidea}
          gitLink=""
          siteLink="https://kidea.ge"
        />
        <ProjectsCard
          title="CARIZMA E-COMMERCE PLATFORM"
          des={
            <>
              Developed and deployed a full-featured E-commerce platform specializing in automotive accessories and parts. The entire system is built on the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js). It utilizes <strong>MongoDB Atlas</strong> for a managed and scalable database solution. The platform is hosted using a multi-service deployment strategy, leveraging <strong>Vercel Dashboard</strong> for the front-end and <strong>Render</strong> for robust back-end services.
            </>
          }
          src={carizma}
          gitLink=""
          siteLink="https://carizma.ge/"
        />
        <ProjectsCard
          title="E-COMMERCE WEBSITE"
          des={
            <>
              Built with <strong>React</strong> and <strong>Ant Design</strong>, this e-commerce platform is a visually stunning shopping website. The system leverages the power of <strong>DummyJSON</strong> to simulate dynamic and engaging product content, enabling rapid development and efficient UI prototyping. The project showcases strong proficiency in modern component-based UI development and third-party data integration.
            </>
          }
          src={projectOne}
          gitLink="https://github.com/aleksandrre/AntDisignWebApp"
          siteLink="https://ant-disign-web-app.vercel.app/"
        />
        <ProjectsCard
          title="SLOT GAME"
          des={
            <>
              Developed a casual, <strong>skill-based slot machine game</strong> featuring a dynamic, moving ball within a segmented track. The game logic relies on a custom-implemented <strong>randomization algorithm</strong> to determine the final landing position within profitable and non-profitable sections. The primary technical challenge was rendering smooth <strong>real-time animation</strong> and accurately calculating the ball's final trajectory to align with the outcome of the spin.
            </>
          }
          src={projectTwo}
          gitLink="https://github.com/aleksandrre/badSlot"
          siteLink="https://bad-slot.vercel.app/"
        />
        <ProjectsCard
          title="TAX_APP"
          des={
            <>
              An innovative communication platform designed to streamline direct interaction with tax professionals. The application is rapidly developed using the <strong>Next.js</strong> framework and styled with <strong>Tailwind CSS</strong>. It incorporates <strong>Mapbox GL JS</strong> for location-based services (if applicable) and utilizes <strong>Firebase</strong> for robust backend services, including real-time data synchronization and user authentication.
            </>
          }
          src={projectThree}
          gitLink="https://github.com/aleksandrre/taxdriverapp"
          siteLink="https://taxdriverapp.vercel.app/"
        />
        <ProjectsCard
          title="MeteorMaster"
          des={
            <>
              Developed a high-performance weather application designed to provide users with up-to-date weather information and forecasts for any selected city. The app is built using <strong>React</strong> and utilizes <strong>TypeScript</strong> for enhanced code quality and scalability. Data is fetched via a robust <strong>REST API</strong> which integrates with an external <strong>Weather API</strong> source, ensuring accuracy and reliability in displaying current and forecasted weather conditions.
            </>
          }
          src={projectFour}
          gitLink="https://github.com/aleksandrre/Weatherapp"
          siteLink="https://weatherapp-kohl-rho.vercel.app/"
        />
        {/* <ProjectsCard
          title="CAR_EXPLORER"
          des=" Our new CarsSite, powered by Next.js, Tailwind CSS, TypeScript, Rapid API, and Headless UI, provides a comprehensive platform to explore a wide range of cars. Easily access detailed information on numerous car models and apply advanced filters based on manufacturing dates."
          src={projectFive}
          gitLink="https://github.com/aleksandrre/CarsSite"
          siteLink="https://cars-site-orcin.vercel.app/"
        /> */}
        <ProjectsCard
          title="QuizMaster"
          des={
            <>
              Developed a new QuizGame app designed to deliver an engaging and interactive gaming experience. The application is built using modern front-end standards, leveraging <strong>TypeScript</strong> for type safety and scalability, and the <strong>React</strong> library for component-based architecture. All styling and UI logic are managed using <strong>Styled Components</strong>, ensuring modular and maintainable design.
            </>
          }
          src={projectSix}
          gitLink="https://github.com/aleksandrre/QuizApp"
          siteLink="https://quiz-app-six-jet.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
