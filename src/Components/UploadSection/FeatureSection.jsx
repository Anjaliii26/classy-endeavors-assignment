import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

const FeatureSection = () => {
  return (
    <div className="w-full max-w-[707px] mx-auto px-4 flex flex-col sm:flex-row items-center gap-3 mt-10">
      <div className="w-full sm:w-[484px] h-[63px] bg-white border border-black rounded-[30px] flex items-center px-4">
        <span className="font-['Poppins'] text-xs sm:text-sm mr-auto">Drop your file here</span>

        <button className="bg-[#254A76] rounded-[65px] w-full sm:w-[149px] h-[47px] flex items-center justify-center mt-2 sm:mt-0">
          <FontAwesomeIcon icon={faUpload} className="text-white mr-2" />
          <span className="font-['Poppins'] text-xs sm:text-sm text-white">Upload File</span>
        </button>
      </div>

      <span className="font-['Poppins'] font-normal text-xs sm:text-sm">OR</span>

      <button className="bg-[#254A76] rounded-[65px] w-full sm:w-[181px] h-[47px] flex items-center justify-center">
        <FontAwesomeIcon icon={faWandMagicSparkles} className="text-white mr-2" />
        <span className="font-['Poppins'] text-xs sm:text-sm text-white">Generate with AI</span>
      </button>
    </div>
  );
};

export default FeatureSection;
