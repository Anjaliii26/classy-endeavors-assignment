import React from "react";

const TeamPlan = () => {
  return (
    <div
      className="relative bg-[#254A76] text-[#fff] border-black shadow-lg p-6 flex flex-col h-[535px] w-[371.55px]"
      style={{
        boxSizing: "border-box",
        boxShadow: "5px 5px 10px 2px rgba(207, 40, 176, 0.5)",
      }}
    >
      <div className="flex-grow">
        <div className="font-poppins text-2xl font-semibold mb-4">Teams</div>

        <div className="flex items-center font-poppins mb-6">
          <span className="text-lg">USD</span>
          <span className="text-4xl font-medium mx-2">8</span>
          <span className="text-sm font-[275]">/Month</span>
        </div>

        <div className="flex items-center font-poppins mb-6 text-sm">
          <span className="text-lg font-[275]">Minimum total of</span>
          <span className="text-lg font-semibold ml-1">USD 24/month</span>
        </div>

        <ul className="font-poppins text-[20px] list-disc space-y-5 pl-6 mb-4 font-[400]">
          <li>Everything from Premium</li>
          <li>Team Management</li>
          <li>Transferable contracts</li>
        </ul>
      </div>

      <div className="flex justify-between items-center mb-16">
        <span className="font-poppins font-[400px]">Monthly total</span>
        <span className="font-poppins font-normal">USD 24</span>
      </div>

      <button className="w-full bg-[#ffffff] text-[#254A76] py-2 rounded-[65px] hover:bg-purple-600 transition">
        Select Plan
      </button>
    </div>
  );
};

export default TeamPlan;
