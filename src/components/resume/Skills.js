import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillsTabs = () => {
  const sections = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "100%" },
        { name: "Tailwind CSS", level: "95%" },
        { name: "TypeScript", level: "90%" },
        { name: "JavaScript (ES6+)", level: "100%" },
        { name: "Next.js", level: "95%" },
        { name: "Component Architecture", level: "90%" },
        { name: "Ant Design", level: "95%" },
      ],
    },
    {
      title: "Backend & API Engineering",
      skills: [
        { name: "Node.js", level: "95%" },
        { name: "Express.js", level: "100%" },
        { name: "REST API Architecture", level: "95%" },
        { name: "Authentication & Authorization", level: "90%" },
        { name: "Mongoose & MongoDB", level: "85%" },
        { name: "Multi-tenant architecture", level: "90%" },
        { name: "Real-time applications (Socket.io)", level: "85%" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, IAM, CloudWatch)", level: "90%" },
        { name: "DigitalOcean droplets", level: "85%" },
        { name: "Vercel deployments", level: "95%" },
        { name: "Cloudflare CDN & DNS", level: "90%" },
        { name: "Nginx", level: "85%" },
        { name: "PM2 process manager", level: "90%" },
      ],
    },
    {
      title: "CI/CD & Containerization",
      skills: [
        { name: "Docker", level: "90%" },
        { name: "GitHub Actions", level: "85%" },
        { name: "Automated deployments", level: "90%" },
        { name: "Version control (Git / GitHub)", level: "100%" },
      ],
    },
    {
      title: "Monitoring, Performance & Observability",
      skills: [
        { name: "Grafana", level: "85%" },
        { name: "Mux", level: "80%" },
        { name: "New Relic", level: "85%" },
        { name: "PagerDuty", level: "80%" },
        { name: "Zabbix", level: "80%" },
        { name: "Application performance optimization", level: "90%" },
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        { name: "Postman", level: "95%" },
        { name: "Jest", level: "85%" },
        { name: "Debugging / Profiling", level: "90%" },
        { name: "Code Review Standards", level: "90%" },
      ],
    },
    {
      title: "Other Tools & Technologies",
      skills: [
        { name: "WebSockets", level: "85%" },
        { name: "JSON Web Tokens", level: "90%" },
        { name: "API Security", level: "85%" },
        { name: "Responsive UI Systems", level: "95%" },
        { name: "Scrum / Agile workflow", level: "90%" },
        { name: "Asana", level: "85%" },
        { name: "Blockchain integrations", level: "80%" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const tabClass = (isActive) =>
    `cursor-pointer px-4 py-2 text-center border-b-4 transition-all duration-300 ${
      isActive
        ? "border-designColor text-designColor font-semibold rounded-t-lg"
        : "border-transparent text-gray-500 hover:text-designColor hover:border-designColor"
    }`;

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 border-b border-gray-300 mb-6">
        {sections.map((section, index) => (
          <button
            key={index}
            className={tabClass(activeTab === index)}
            onClick={() => setActiveTab(index)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        {sections[activeTab].skills.map((skill, i) => (
          <div key={i} className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">{skill.name}</p>
            <span className="w-full h-2 bg-opacity-20 bg-gray-300 rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                style={{ width: skill.level }}
              >
                <span className="absolute -top-7 right-0 text-xs">{skill.level}</span>
              </motion.span>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsTabs;
