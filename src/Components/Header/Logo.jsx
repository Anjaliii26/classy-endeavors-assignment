import React from 'react';
import LogoImage from "../../assets/Images/Logoh.svg";

const Logo = () => {
  return (
    <div className="flex items-center h-[40px]">
      <div className="w-8 h-8  rounded-lg flex items-center justify-center mr-2">
        <img src={LogoImage} alt="Logo" className="w-full h-full object-contain" />
      </div>

      <span className="font-bold text-lg sm:text-xl text-[#254A76]">DocuTech</span>
    </div>
  );
};

export default Logo;
