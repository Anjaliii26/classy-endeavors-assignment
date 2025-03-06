import React, { useState } from "react";
import FreePlan from "./FreePlan";
import TeamPlan from "./TeamPlan";
import PremiumPlan from "./PremiumPlan";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="flex flex-col items-center p-10 min-h-screen">
      <h1 className="text-3xl font-[700] text-black mb-6">
        Pick your plan. We make this part easy too.
      </h1>

      <div
        className="relative flex bg-white border border-black rounded-[65px] p-1 mb-8"
        style={{ width: "299.28px", height: "60px" }}
      >
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-[#254A76] rounded-[65px] transition-all duration-300 ${
            isMonthly ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>
        <button
          className={`relative z-10 px-6 py-2 w-1/2 text-center rounded-full transition-all font-medium ${
            isMonthly ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`relative z-10 px-6 py-2 w-1/2 text-center rounded-full transition-all font-medium ${
            !isMonthly ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Annually
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Free Plan */}
        <FreePlan isMonthly={isMonthly} />

        {/* Premium Plan */}
        <PremiumPlan isMonthly={isMonthly} />

        {/* Team Plan */}
        <TeamPlan isMonthly={isMonthly} />
      </div>
    </div>
  );
};

export default PricingSection;