import React from "react";

const PremiumPlan = () => {
  return (
    <div
      className="relative bg-[#254A76] text-[#fff] border-black shadow-lg p-6 flex flex-col h-[535px] w-[371.55px]"
      style={{
        boxSizing: "border-box",
        boxShadow: "5px 5px 10px 2px rgba(207, 40, 176, 0.5)"
      }}
    >
      <div className="flex-grow">
        <div className="font-poppins text-2xl font-semibold mb-4">Premium</div>

        <div className="flex items-center font-poppins mb-6">
          <span className="text-lg">USD</span>
          <span className="text-4xl font-medium mx-2">10</span>
          <span className="text-sm font-[275]">/Month</span>
        </div>

        <ul className="font-poppins font-[400] h-[160px] list-disc space-y-5 first-letter: pl-6 mt-10">
          <li>Unlimited documents</li>  
          <li>Unlimited signees</li>
          <li>Activity timeline</li>
          <li>Certificate of completion</li>
        </ul>
      </div>

      <button className="w-full bg-[#ffffff] text-[#254A76] py-2 rounded-[65px] hover:bg-purple-600 transition">
        Select Plan
      </button>
    </div>
  );
};

export default PremiumPlan;
