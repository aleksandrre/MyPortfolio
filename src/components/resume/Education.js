import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTU (BUSINESS AND TECHNOLOGY UNIVERSITY)"
            subTitle="DevOps Engineering Program"
            result="100/100"
            time="(2024 - Present)"
            des="Specialized program focusing on modern software delivery and infrastructure automation. Core subjects included Linux Administration, AWS Cloud Infrastructure, Docker/Containerization, CI/CD Pipelines, MongoDB Administration, and Agile Methodology."
          />
          <ResumeCard
            title="TBILISI STATE UNIVERSITY"
            subTitle="Faculty of Physics"
            time="(2019 - 2023)"
            result="100/100"
            des="Graduated from the highly-regarded Physics Faculty. Coursework included advanced analytical subjects like Quantum Mechanics, Nuclear Physics, Solid State Physics, and Theoretical Physics, cultivating advanced abstract modeling and complex problem-solving skills."
          />
          <ResumeCard
            title="KOMAROVI CAMPUS SCHOOL"
            subTitle="Specialized Physics and Mathematics School"
            time="(2013 - 2019)"
            result="100/100"
            des="A prestigious institution specializing in intensive Physics and Mathematics. This program provided a robust foundation in complex analytical thinking, logical deduction, and problem-solving-skills critical for advanced engineering roles."
          />
          <ResumeCard
            title="UG_LIMES"
            subTitle="Programming and Robotics Academy"
            result="100/100"
            time="(2014 - 2017)"
            des="An innovative academy where I gained practical, low-level programming expertise. Coursework covered embedded systems, electronics, microcontroller programming (Arduino), and robotics, building a strong foundation in computational logic and systems integration."
          />
          
          
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
