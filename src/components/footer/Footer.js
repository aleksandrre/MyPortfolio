import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux // გადატანილია Fa ბიბლიოთეკაში, რათა არ მოხდეს კონფლიქტი
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiAmazonaws,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiFirebase,
  SiFigma,
  SiPostman,
  SiSwagger,
  SiPhp,
  SiRedux,
  SiAntdesign,
  SiSocketdotio,
  SiPagerduty,
  SiNewrelic,
  SiGrafana,
  SiCsharp,
  SiJira,
  SiTrello
} from "react-icons/si";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">

      {/* Logo & Socials */}
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100094999940171"
            className="bannerIcon" target="_blank"
          >
            <FaFacebookF />
          </a>
          <a href="https://github.com/aleksandrre" className="bannerIcon" target="_blank">
            <FaGithub />
          </a>
          <a
            href="http://linkedin.com/in/aleksandre-chokheli-640300247"
            className="bannerIcon"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Tech Stack Icons - STYLING FIXED */}
      <div className="w-full h-full col-span-3">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Tech Stack
        </h3>
        {/* Changed gap to gap-6 for better spacing, removed py-6 */}
        <div className="flex flex-wrap gap-6 py-6">

          {/* CORE & FRONTEND */}
          <SiJavascript className="text-yellow-400 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="JavaScript" />
          <SiTypescript className="text-blue-700 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="TypeScript" />
          <FaReact className="text-blue-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="React" />
          <SiNextdotjs className="w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Next.js" />
          {/* SiReactnative-ის გამოყენებისას, თუ პრობლემა გექნებათ, ჩაანაცვლეთ FaReact-ით */}
          <SiRedux className="text-purple-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Redux" />
          <SiHtml5 className="text-orange-600 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="HTML5" />
          <SiCss3 className="text-blue-600 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="CSS3" />
          <SiTailwindcss className="text-blue-400 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Tailwind CSS" />
          <SiSass className="text-pink-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="SASS/SCSS" />
          <SiBootstrap className="text-purple-700 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Bootstrap" />
          <SiAntdesign className="text-red-700 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Ant Design" />

          {/* BACKEND & API */}
          <FaNodeJs className="text-green-600 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Node.js" />
          <SiSocketdotio className="w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Socket.io" />
          <SiPhp className="text-purple-400 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="PHP" />
          <SiPostman className="text-orange-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Postman" />
          <SiSwagger className="text-green-700 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Swagger" />

          {/* DATABASE & CACHING */}
          <SiMongodb className="text-green-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="MongoDB" />
          <SiPostgresql className="text-blue-600 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="PostgreSQL" />
          <SiRedis className="text-red-400 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Redis" />
          <SiFirebase className="text-yellow-600 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Firebase" />

          {/* DEVOPS & MONITORING */}
          <FaLinux className="text-yellow-700 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Linux" />
          <FaDocker className="text-blue-400 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Docker" />
          <SiAmazonaws className="text-orange-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="AWS" />
          <SiGrafana className="text-orange-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Grafana" />
          <SiNewrelic className="text-green-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="New Relic" />
          <SiPagerduty className="text-green-700 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="PagerDuty" />

          {/* TOOLS & OTHER */}
          <FaGitAlt className="text-orange-600 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Git" />
          <SiFigma className="text-pink-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Figma" />
          <SiJira className="text-blue-700 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Jira" />
          <SiTrello className="text-blue-500 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="Trello" />
          <SiCsharp className="text-purple-600 w-8 h-8 hoce:scale-125 transition-transform cursor-pointer" title="C#" />
        </div>
      </div>

    </div>
  );
};

export default Footer;