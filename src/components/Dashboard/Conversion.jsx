import React from "react";
import { Lightbulb } from "lucide-react";
const cards = [
  {
    img: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/sc_hompage_widget_revamp_stat1_about_shoppable_video_v3.png~tplv-aphluv4xwc-origin-png.png",
    title: "Shoppable videos are the most powerful way to sell on TikTok.",
    btn: "Get tips",
  },
  {
    img: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/sc_hompage_widget_revamp_stat2_about_shoppable_video_v2.png~tplv-aphluv4xwc-origin-png.png",
    title: "On average, 3 out of 5 shoppers click on a shoppable video.",
    btn: "Create video",
  },
  {
    img: "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/sc_hompage_widget_revamp_auto_generation_v2.png~tplv-aphluv4xwc-origin-png.png",
    title: "Create a shoppable video in less than 2 minutes with AI.",
    btn: "Get started",
  }
];

function Conversion() {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-10 bg-white rounded-lg">
      
      {/* Heading */}
      <p className="flex items-center text-2xl font-semibold text-gray-800">
        <span className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-gray-600">
          <Lightbulb />
        </span>
        Increase conversions with better content and right creators
      </p>

      {/* Cards Row */}
      <div className="flex gap-6 flex-wrap md:flex-nowrap">
        {cards.map((c, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 w-full md:w-[309px] flex-1"
          >
            <img
              src={c.img}
              className="w-full h-[206px] rounded-lg border border-gray-300 shadow-md object-cover"
              alt=""
            />

            <div className="text-gray-800 font-medium leading-snug line-clamp-2 h-12">
              {c.title}
            </div>

            <button className="w-full border bg-[#f2f2f2] border-[#f2f2f2] py-2 rounded-md hover:bg-[#ebebeb] transition">
              {c.btn}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Conversion;
