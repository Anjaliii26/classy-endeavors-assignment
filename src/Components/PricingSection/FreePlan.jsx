import React from "react";

const FreePlan = () => {
  return (
    <div
      className="relative bg-white border border-black shadow-lg p-6 flex flex-col h-[535px] w-[371.55px]"
      style={{
        boxSizing: "border-box",
        boxShadow: "5px 5px 10px 2px rgba(207, 40, 176, 0.5)"
      }}
    >
      <div className="flex-grow">
        <div className="font-poppins text-2xl font-semibold mb-4">FREE</div>

        <div className="flex items-center font-poppins mb-6">
          <span className="text-lg">USD</span>
          <span className="text-4xl font-medium mx-2">0</span>
          <span className="text-sm font-[275]">/Month</span>
        </div>

        <div className="font-poppins font-[275] bg-gray-200 text-center rounded-md py-1 text-sm mb-6 w-[171.02px]">
          No Credit Card required
        </div>

        <ul className="font-poppins font-[400] list-disc space-y-5 pl-6">
          <li>5 documents a month</li>
          <li>Activity timeline</li>
        </ul>
      </div>

      <button className="w-full bg-[#254A76] text-white py-2 rounded-[65px] hover:bg-purple-600 transition">
        Select Plan
      </button>
    </div>
  );
};

export default FreePlan;
