import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full max-w-[1190px] bg-white rounded-[20px] mb-4 cursor-pointer transition-shadow duration-300 font-[Poppins] text-[20px]"
      style={{
        boxShadow: isOpen ? "5px 5px 10px 2px #CF28B066" : "0px 0px 5px 0px rgba(0,0,0,0.1)",
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Question Section */}
      <div className="flex justify-between items-center bg-[#254A76] h-[100px] text-white p-6 rounded-[20px]">
        <span className="text-lg md:text-xl font-semibold">{question}</span>
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size="lg" />
      </div>

      {/* Answer Section (Only visible when open) */}
      {isOpen && (
        <div className="p-6 text-[#254A76] text-base md:text-lg rounded-b-[20px]" style={{ opacity: 0.88 }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Are DocuTech signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
    {
      question: "Are DocuTech signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
    {
      question: "Are DocuTech signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
    {
      question: "Are DocuTech signatures legally binding?",
      answer: "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center gap-6 px-4 mt-15 font-[Poppins] text-[20px]">
      
      <h2 className="font-bold text-3xl  lg:text-3xl leading-tight text-[rgb(38,38,38)] text-center max-w-xs md:max-w-md">
        FAQs
      </h2>

      
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
