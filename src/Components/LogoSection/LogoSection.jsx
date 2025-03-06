import React from "react";
import usSanDiego from "../../assets/Images/UCSanDiego.png";
import ivirma from "../../assets/Images/ivirma-logo.png";
import howardUniversity from "../../assets/Images/HowardUniversity.png";
import absa from "../../assets/Images/absa.svg";
import b2bRocket from "../../assets/Images/B2BRocket.png";
import pharmbillsLogo from "../../assets/Images/Pharmbills.svg";

const LogoSection = () => {
  return (
    <div className="max-w-[1122px] w-full mx-auto mt-2 flex flex-wrap items-center justify-center gap-x-20 gap-y-6">
      <img src={usSanDiego} alt="UC San Diego" className="w-[128px] h-[25.59px]" />
      <img src={ivirma} alt="IVIRMA" className="w-[128px] h-[46.53px]" />
      <img src={howardUniversity} alt="Howard University" className="w-[128px] h-[54px]" />
      <img src={pharmbillsLogo} alt="Pharmbills" className="w-[128px] h-[14.03px]" />
      <img src={absa} alt="Absa" className="w-[56px] h-[56px]" />
      <img src={b2bRocket} alt="B2B Rocket" className="w-[128px] h-[30px]" />
    </div>
  );
};

export default LogoSection;
