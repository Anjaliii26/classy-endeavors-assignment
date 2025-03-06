import React from "react";

const StatsSection = () => {
  return (
    <div className="flex justify-center items-center px-4 py-6">
      <p className="font-poppins font-bold text-[24px] md:text-[30px] leading-[35px] md:leading-[45px] text-[#262626] text-center max-w-[706px]">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#80BBEB] via-[#89A3D5] to-[#254A76]">
          64.0k
        </span>{" "}
        businesses and individuals have signed with{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#80BBEB] via-[#89A3D5] to-[#254A76]">
          DocuTech
        </span>
      </p>
    </div>
  );
};

export default StatsSection;

