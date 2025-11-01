import React from "react";

const Proven = () => {
  return (
    <section className="dashboard-row flex justify-center gap-4 mb-6">
      <div className="strategies w-[1040px]">
        {/* Header */}
        <div
          id="homepage.grow-business-title"
          className="w-full py-4 bg-[#f8f9fa] sticky top-[60px] z-[100] mt-0 mb-2"
        >
          <div className="w-full flex flex-col items-start">
            <span className="text-lg font-semibold text-gray-900 mb-2">
              Proven strategies to grow your business
            </span>
            <p className="text-[#0000008c] text-xs mb-4 font-medium tracking-tight">
              Looking for guidance on growing your shop? Explore a range of strategies
              and customized suggestions just for you.
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative w-[1040px] h-[180px] bg-white rounded-lg">
          <div className="flex flex-col gap-4 text-white w-[550px] absolute top-[60px] left-[44px]">
            <div className="w-full h-[36px] rounded-md bg-[#e5e7eb]"></div>
            <div className="w-full h-[24px] rounded-md bg-[#e5e7eb]"></div>
          </div>
          <div className="w-[300px] h-[100px] absolute right-[82px] top-[40px] rounded-md bg-[#e5e7eb]"></div>
        </div>

        {/* Strategy List */}
        <article className="bg-white rounded-lg shadow-sm mt-8 p-6">
          <div className="h-[32px] w-[520px] mb-6 bg-[#f0f0f0] rounded-md animate-pulse"></div>
          <ul className="grid grid-cols-2 gap-4 list-none p-0 m-0">
            <li>
              <div className="h-[100px] bg-[#f0f0f0] rounded-md animate-pulse"></div>
            </li>
            <li>
              <div className="h-[100px] bg-[#f0f0f0] rounded-md animate-pulse"></div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Proven;
