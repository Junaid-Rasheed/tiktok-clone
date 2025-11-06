import React from "react";
import { Rocket, ShoppingCart, Search } from "lucide-react";

export default function Sales() {
  return (
    <div className="my-4 p-6 rounded-lg bg-white relative shadow-sm">
      <div className="bg-white rounded-lg">

        {/* Title */}
        <div className="text-2xl font-semibold mb-6">
          Drive sales with TikTok Shop Ads
        </div>

        {/* Banner Main */}
        <div className="flex flex-col md:flex-row md:h-[186px] justify-between border rounded-lg border-gray-300 p-4 gap-4 md:gap-0">

          {/* Left Image */}
          <img
            src="https://lf16-scmcdn.oecstatic.com/obj/oec-magellan-us/oec/workbench/widgets/2.0.0.6949/ads-sea/static/js/../../static/image/gvm_max_bg.1a55b1c2.png"
            alt="GmvMax-Background"
            className="h-[160px] md:h-full w-full md:w-[240px] rounded-md object-cover"
          />

          {/* Right Content */}
          <div className="px-2 md:px-6 flex flex-col flex-1 justify-between">

            {/* Heading + Subtitle */}
            <section>
              <div className="text-lg font-semibold mb-1">
                GMV Max can promote all your products and livestreams
              </div>
              <div className="text-sm text-gray-600">
                80% of sellers have seen a 20% increase in GMV using GMV Max
              </div>
            </section>

            {/* Bottom Info */}
            <section className="flex flex-col md:flex-row justify-between gap-4 mt-4 md:mt-0">

              {/* Left Box */}
              <div className="flex items-start w-full md:w-1/2 bg-gray-50 p-3 rounded-md">
                <Rocket className="h-6 w-6 mr-3 text-gray-700" />
                <span className="text-sm text-gray-700 leading-tight">
                  Automatically identify and scale your highest-performing ad creative
                </span>
              </div>

              {/* Right Box */}
              <div className="flex items-start w-full md:w-1/2 bg-gray-50 p-3 rounded-md">
                <Search className="h-6 w-6 mr-3 text-gray-700" />
                <span className="text-sm text-gray-700 leading-tight">
                  Reach high-intent shoppers on feeds, Shop Tabs and search results
                </span>
              </div>

            </section>

          </div>

          {/* Right Button Section */}
          <div className="flex flex-col justify-end w-full md:w-[160px]">

            <button className="bg-[#009995] text-white px-6 py-2 rounded-md w-full mb-2">
              Create ads
            </button>

            <div className="flex items-center text-sm text-gray-600 justify-center md:justify-start">
              <span className="mr-2">Just 3 steps</span>
              <ShoppingCart className="h-4 w-4 text-gray-500" />
            </div>

          </div>

        </div>
      </div>

      {/* Top-Right Empty Absolute Box */}
      <div className="absolute top-6 right-6"></div>
    </div>
  );
}
