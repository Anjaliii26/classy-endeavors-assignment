import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="relative flex space-x-4">
      <a
        href="https://discord.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
      >
        <FontAwesomeIcon
          icon={faDiscord}
          className="absolute w-[32px] h-[24.38px] text-[#254A76]"
          style={{
            left: "calc(50% - 32px/2)",
            top: "calc(50% - 24.38px/2)",
          }}
        />
      </a>
    </div>
  );
};

export default Socials;
