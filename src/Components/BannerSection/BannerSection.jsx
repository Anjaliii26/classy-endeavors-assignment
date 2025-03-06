import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const BannerSection = () => {
  return (
    <div className="relative w-full max-w-[1067px] mx-auto px-4 mt-6 md:mt-10 text-center">
      <p className="text-base md:text-lg lg:text-xl font-poppins font-normal text-[#262626] leading-6 md:leading-7 lg:leading-8 max-w-[90%] md:max-w-[80%] lg:max-w-[948px] mx-auto">
        Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
      </p>

      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mt-4">
        {["ESIGN Compliant", "UETA Approved", "eIDAS Certified"].map((cert) => (
          <div key={cert} className="flex items-center gap-2 text-sm md:text-base lg:text-lg font-poppins font-normal">
            <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#254A76]" />
            <span className="text-[#262626]">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
