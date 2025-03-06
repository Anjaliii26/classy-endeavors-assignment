import React from "react";
import LogoIm from "../../assets/Images/Logof.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#254A76] shadow-md rounded-t-[30px] flex flex-col items-center justify-between p-4 md:p-6 font-poppins mt-6">
    
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
      
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center">
            <img src={LogoIm} alt="Logo" className="mr-2 w-10 h-10" />
            <span className="text-white font-bold text-xl md:text-2xl">DocuTech</span>
          </div>
          <p className="text-white text-sm md:text-[15px] leading-[24px]">Powered by Classy Endeavors</p>
        </div>

       
        <div className="flex flex-col items-center mt-4 md:mt-0">
         
          <div className="flex items-center space-x-4 text-white text-xl md:self-end md:mr-[1%]">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-[15px]" />
            <FontAwesomeIcon icon={faFacebook} className="text-white text-[15px]" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-[15px]" />
            <FontAwesomeIcon icon={faDiscord} className="text-white text-[15px]" />
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-[15px]" />
            <FontAwesomeIcon icon={faMessage} className="text-white text-[15px]" />
          </div>
          
          {/* Horizontal Line */}
          <div className="w-[200px] border-t border-white mt-2 mb-2 md:self-end md:mr-[0%]"></div>

          {/* Links with Smooth Scroll */}
          <div className="flex flex-wrap justify-center space-x-4">
            <button onClick={() => scrollToSection("features")} className="text-white text-[14px] md:text-[16px] no-underline">
              Features
            </button>
            <button onClick={() => scrollToSection("whychooseus")} className="text-white text-[14px] md:text-[16px] no-underline">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-white text-[14px] md:text-[16px] no-underline">
              Pricing
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-white text-[14px] md:text-[16px] no-underline">
              FAQ
            </button>
            <a href="#" className="text-white text-[14px] md:text-[16px] no-underline">Legal Terms</a>
            <a href="#" className="text-white text-[14px] md:text-[16px] no-underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
