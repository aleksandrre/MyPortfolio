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
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <>
            <ResumeCard
              title="Conceptdigital"
              subTitle="Senior Software Engineer (Part-time)"
              time="2025 - Present · 11 mos"
              result="10/10"
              des="Architected and maintained scalable multi-tenant MERN stack applications using TypeScript. Successfully designed and implemented complex tenancy logic, with a portion of the tenants managed on a Blockchain ledger, demonstrating expertise in cutting-edge distributed systems. Handled robust CI/CD pipelines for seamless deployment across DigitalOcean, Vercel, and Cloudflare, ensuring global performance and reliability. Experienced in Agile management."
            />

            <ResumeCard
              title="Web Development Mentor (Mziuri College)"
              subTitle="Mentor / Full-Stack Trainer"
              time="Oct 2024 - Present · 1 yr 2 mos"
              result="10/10"
              des="Teaching Full-Stack Web Development, focusing on MERN Stack fundamentals, modern frontend design, REST API development, and real-world project architecture. I guide students through building practical applications, actively improving their code quality, and ensuring they understand current industry standards. I also mentor new developers, providing hands-on exercises, and help shape their professional growth in key technologies, including JavaScript, Node.js, Express, and MongoDB."
            />

            <ResumeCard
              title="Tech Wizards"
              subTitle="Lead Full-Stack Engineer"
              time="Nov 2023 - Oct 2024 · 1 yr"
              result="10/10"
              des="As a Tech Lead and Senior Full-Stack Developer, I led the design and development of modern web solutions using the MERN Stack, making key architectural decisions and ensuring code quality, scalability, and smooth project execution.
I built high-performance systems with React, Node.js, Express, MongoDB, and Tailwind CSS, developing reusable components, secure authentication flows, optimized database models, and clean REST APIs.
I also managed cloud infrastructure on AWS, deploying services on EC2, storing assets on S3, handling access control with IAM, monitoring with CloudWatch, and optimizing servers using Nginx and PM2.
Beyond development, I coordinated team collaboration, led code reviews, mentored developers, and enforced best practices in Git workflows, testing, debugging, and performance optimization—delivering reliable and maintainable software across all projects."
            />

            <ResumeCard
              title="WARD Ops"
              subTitle="Monitoring Engineer (SRE Focus)"
              time="May 2023 - Aug 2023 · 4 mos"
              result="10/10"
              des="Focused on the stability, performance, and reliability of Setanta Sports live streaming services and web platform. Monitored real-time traffic, identified incidents, and resolved performance bottlenecks in mission-critical environments.
Used tools such as Grafana, Mux, New Relic, Zabbix, PagerDuty, and Jira to track system health, optimize resource usage, and ensure seamless live streaming at scale. Maintained communication with stakeholders, documented incidents, and supported escalation processes to guarantee uninterrupted platform performance."
            />

            <ResumeCard
              title="Money4You Financial Holding"
              subTitle="Full-Stack Developer"
              time="Oct 2022 - Nov 2023 · 1 yr 2 mos"
              result="10/10"
              des="I developed mission-critical features within the financial sector, building dynamic, high-performance user interfaces with React and implementing secure, reliable server-side components using Node.js. I engineered real-time communication features, including a fully functional live chat system, leveraging Socket.io for persistent connections and event-driven messaging.
My work included designing efficient MongoDB schemas, managing complex data flows between clients and servers, and implementing robust authentication and authorization mechanisms to ensure platform security. I focused on delivering fast, responsive UI/UX, consistent state management, and seamless real-time interactions across the application."
            />
          </>

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
