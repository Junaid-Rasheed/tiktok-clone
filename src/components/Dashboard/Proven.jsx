// src/components/ImageSlider.jsx
import React, { useState, useEffect } from "react";

const Proven = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Prevent Violations Of Valid Tracking Rate (VTR)",
      description: "With Shipped via Platform and Fulfilled by TikTok you stay protected against VTR violations",
      buttonText: "Stay Protected Now",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      id: 2,
      title: "Exclusive Offer: Unlock Our Lowest Shipping Rates Of £2.14 (VAT Excl.) This October",
      description: "Switch on 1st October to Shipped via Platform to unlock the lowest rate tier in the month of October for parcels under 15kg",
      buttonText: "Unlock Lowest Shipping Rates",
      bgColor: "from-green-50 to-blue-50"
    },
    {
      id: 3,
      title: "up to £2,000 in Promote Coupons or Amazon vouchers",
      description: "Start inviting sellers",
      buttonText: "Start inviting sellers",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="my-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Featured Promotions</h2>
      <p className="text-gray-500 text-xs mb-4 font-medium tracking-tight">
        Discover exclusive offers and protection services for your business.
      </p>
      
      <div className="bg-white rounded-lg border border-gray-200 relative">
        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-lg">
          {/* Slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0"
              >
                <div className="bg-white rounded-lg cursor-pointer">
                  {/* Content Container */}
                  <div className={`w-full h-32 bg-gradient-to-br ${slide.bgColor} rounded-lg p-4 flex flex-col justify-between`}>
                    <div className="flex-1">
                      <div className="flex justify-between">
                      <h3 className="text-[26px] font-semibold text-[#fe2c55] mb-1 line-clamp-2 leading-tight">
                        {slide.title}
                      </h3>
                      <span className="text-gray-500">X</span>
                        </div>
                      <p className="text-[14px] text-gray-600 line-clamp-2 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                    
                    {/* Exact Button Styling - ONLY THIS CHANGED */}
                    <button className="bg-transparent border border-[#fe2c55] text-[#fe2c55] px-4 py-2 rounded-md text-[12px] font-semibold  w-fit">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators - Centered at bottom */}
        
        </div>
      </div>
    </section>
  );
};

export default Proven;