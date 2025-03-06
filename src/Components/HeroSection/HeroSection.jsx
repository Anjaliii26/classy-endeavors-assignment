import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto text-center mt-10 md:mt-16 px-4">
      <div className="w-full max-w-[924px] mx-auto">
        <h1 className="font-['Poppins'] font-bold text-3xl md:text-5xl leading-tight md:leading-[65px]">
          AI-Powered Unified Platform;
          <br />
          <span className="bg-gradient-to-r from-[#80BBEB] to-[#254A76] bg-clip-text text-transparent">
            Create{" "}
          </span>
          <span>Effortlessly</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
