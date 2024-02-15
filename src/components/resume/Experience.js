import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tech Wizards"
            subTitle="Full Stack Engineer"
            time="Nov 2023 - Present "
            result="10/10"
            des="As a full-stack developer at Tech Wizard, I've woven web solutions using React, Node.js, and MongoDB. From dynamic interfaces to robust backends, my journey here embraced challenges, AWS cloud integration, and a passion for innovative digital experiences"
          />
          <ResumeCard
            title="Money4You Financial Holding · Full-time"
            subTitle="full-stack developer"
            time="Oct 2022 - Nov 2023 · 1 yr 2 mos"
            result="10/10"
            des="created dynamic and responsive user interfaces using React on the frontend.
            Developed server-side components such as User-authentication, Real-time chat, Database
            Integration . . .   using Node.js, handling data processing, and communication with the database."
          />
          <ResumeCard
            title="Freelance"
            subTitle="Full Stack Engineer"
            result="10/10"
            time="Nov 2021 - Oct 2022 · 1 yr "
            des="Skills: Next, React, TypeScript, Redux, Node, Express, Mongoose, PostgreSQL, REST API,
            Socket.io, Tailwind css, Ant Design, Git"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
