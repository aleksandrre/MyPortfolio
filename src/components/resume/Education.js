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
          <p className="text-sm text-designColor tracking-[4px]">2013-2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="KOMAROVI CAMPUS SCHOOL"
            subTitle="High School of Georgia (2013 - 2019)"
            result="3.90/4"
            des="Komarovi School is a prestigious institution specializing in the intensive teaching of physics and mathematics, nurturing students to excel in these subjects and equipping them for future leadership roles."
          />
          <ResumeCard
            title="UG_LIMES"
            subTitle="Programming and Robotics Academy (2014 - 2017)"
            result="4.75/5"
            des="UG Limes Robotics Academy is an innovative school where I've learned programming, robotics, electronics, and more. It's a leading institution in Georgia, partnering with top American companies. They offer robotics and programming in schools recognized by the Ministry of Education. Plus, they host the World Robotics Olympiad in Georgia. The academy provides a great learning environment, and now they offer certificates in both Georgian and English."
          />
          <ResumeCard
            title="TBILISI STATE UNIVERSITY"
            subTitle="A Leading Higher Education University"
            result="5.00/5"
            des="Tbilisi State University is a government institution with a particularly strong Physics Faculty, known for its comprehensive coverage of topics, including quantum physics and various other physics concepts."
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
