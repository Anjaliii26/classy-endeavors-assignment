import React, { useState } from "react";
import Avatar from "../../assets/Images/Avatar.png";
import Star from "../../assets/Images/Star.svg";

const testimonials = [
  "Create contracts, agreements & forms in seconds using advanced AI technology.",
  "This platform has transformed how I handle legal documentation with ease.",
  "Highly recommend! Quick, efficient, and user-friendly contract creation.",
  "The AI suggestions saved me hours of work and legal fees.",
  "A game-changer for freelancers and small business owners.",
  "User-friendly interface and seamless contract generation!"
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;
  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative max-w-[1230px] w-full mx-auto mt-6 px-4">
      <h2 className="font-poppins text-3xl leading-[45px] text-[#262626] text-center">
        What our users say
      </h2>

      <div className="relative flex items-center justify-center mt-8 gap-6 flex-wrap md:flex-nowrap">
        {Array.from({ length: visibleCount }).map((_, i) => {
          const index = (currentIndex + i) % total;
          return (
            <div
              key={index}
              className="relative w-full sm:w-[349px] h-auto bg-white border border-white shadow-md p-6 text-center flex flex-col justify-between rounded-[10px]"
              style={{ boxShadow: "0px 7px 8px rgba(0, 0, 0, 0.25)" }}
            >
              {i === 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-[-10px] sm:left-[-25px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-[#254A76] shadow-md flex items-center justify-center z-10"
                >
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 18L8 11.5L14 5" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
              )}

              <img src={Avatar} alt="User Avatar" className="absolute top-4 left-4 w-[42px] h-[42px] rounded-full" />
              <p className="font-poppins text-base leading-6 text-[#262626] mt-12 min-h-[72px]">
                {testimonials[index]}
              </p>
              <div className="flex justify-center mt-6 mb-5">
                <img src={Star} alt="Stars" className="w-auto h-auto" />
              </div>

              {i === 2 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-[-10px] sm:right-[-25px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-[#254A76] shadow-md flex items-center justify-center z-10"
                >
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5L14 11.5L8 18" stroke="white" strokeWidth="2" />
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
