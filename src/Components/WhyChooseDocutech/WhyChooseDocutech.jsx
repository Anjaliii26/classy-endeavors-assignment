import React, { useState } from "react";

const WhyChooseDocutech = () => {
  const [selected, setSelected] = useState("Trusted by Thousands");

  const options = [
    "Trusted by Thousands",
    "SOC-2 Certified",
    "GDPR & HIPAA Compliant",
    "End-to-end encryption",
  ];

  return (
    <div className="relative flex flex-col items-center w-full mx-auto mt-10 px-4">
      {/* Decorative blurred circles */}
      <div
        className="absolute w-[879px] h-[877px] bg-[#254A76] opacity-50 blur-[250px]"
        style={{ left: "-589px", top: "450px", borderRadius: "50%" }}
      ></div>
      <div
        className="absolute w-[879px] h-[877px] bg-[#254A76] opacity-50 blur-[250px]"
        style={{ left: "943px", top: "464px", borderRadius: "50%" }}
      ></div>

      {/* Title */}
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#262626] text-center mb-6">
        Why Choose Docutech
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start w-full max-w-[1200px] relative z-10">
        {/* Options Section */}
        <div className="flex flex-col gap-4 w-full md:w-[40%] lg:w-[35%]">
          {options.map((option) => (
            <button
              key={option}
              className={`w-full h-[70px] md:h-[85px] text-base md:text-lg font-semibold flex items-center pl-10 rounded-[30px] border-2 transition-all duration-300 
                ${selected === option ? "border-[#254A76] text-[#254A76] custom-shadow" : "border-[#ABABAB] text-[#4A4A4A]"} 
                bg-white`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Selected Option Display */}
        <div className="w-full md:w-[60%] lg:w-[60%] min-h-[737px] bg-white border-[1px] border-[#254A76] rounded-[30px] shadow-lg flex items-center justify-center p-6">
          <p className="text-lg md:text-xl font-medium text-center px-4">{selected}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDocutech;
