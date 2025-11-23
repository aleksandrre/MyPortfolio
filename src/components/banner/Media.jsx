import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100094999940171"
            className="bannerIcon"
            target="_blank"
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
