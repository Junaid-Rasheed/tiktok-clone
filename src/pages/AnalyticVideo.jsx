"use client";

import { useState } from "react";
import {
  ChevronDown,
  SettingsIcon as MetricsIcon,
  Download,
  Trash2,
  Calendar,
  Info,
} from "lucide-react";

const mockData = [
  {
    id: 1,
    badge: "gold",
    title: "#bodymist #bodyspray #foryoupage❤️ ❤️ ...",
    creator: "@onthereguys",
    postTime: "Post time 10/07/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
  {
    id: 2,
    badge: "silver",
    title: "#ypppppppppppppppppppppppppppp...",
    creator: "@emmalove875bitch",
    postTime: "Post time 11/07/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
  {
    id: 3,
    badge: "bronze",
    title: "#caraccessories #carfresh #carfreshener #...",
    creator: "@absreviews1",
    postTime: "Post time 15/07/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
  {
    id: 4,
    title: "Spray #mobiledetailing #cardetailingprodu...",
    creator: "@jbdetailing",
    postTime: "Post time 21/07/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
  {
    id: 5,
    title: "#CapCut #tiktokshopmaademebuyit #deald...",
    creator: "@bootsmademebuyit",
    postTime: "Post time 22/07/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
  {
    id: 6,
    title: "Unbloodyreal #fyp #tokyodreams",
    creator: "@charslife_xox",
    postTime: "Post time 22/07/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
  {
    id: 7,
    title: "Replying to @sarajaneee #detailinglife #c...",
    creator: "@jbdetailing",
    postTime: "Post time 24/07/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
  {
    id: 8,
    title: "The Scentz Company Rio Carnival. Origin: B...",
    creator: "@tom_and_his_veccy",
    postTime: "Post time 28/08/2025",
    gmv: "£0",
    affiliateItems: 0,
    shoppableVideos: "£0",
    estimatedCommission: "£0",
  },
];

const BadgeComponent = ({ type }) => {
  if (!type) return null;
  const icons = {
    gold: "👑",
    silver: "🥈",
    bronze: "🥉",
  };
  return <span className="text-lg">{icons[type]}</span>;
};

export function AnalyticVideo() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="px-6 pt-6 mx-52">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Video</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>(GMT+00:00)</span>
          <div className="bg-white flex justify-between px-4 gap-8 py-1 rounded-sm border border-gray-200">


          <span className="font-medium">
            Last 7 days: 2025-11-15 - 2025-11-21
          </span>
          <Calendar className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Video post date
        </h2>

        {/* Main filter row: left = date inputs + dropdowns; right = actions */}
        <div className="flex items-center justify-between gap-4">
          {/* left side: date inputs + dropdowns */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Date Input Group */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-3 py-2 bg-white">
              <input
                type="text"
                placeholder="Start date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="text-sm text-gray-700 placeholder-gray-400 outline-none w-32 md:w-40"
              />
              <span className="text-gray-400">-</span>
              <input
                type="text"
                placeholder="End date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="text-sm text-gray-700 placeholder-gray-400 outline-none w-32 md:w-40"
              />
              <button className="p-1 text-gray-600">
                <Calendar className="w-4 h-4" />
              </button>
            </div>

            {/* Dropdowns next to the date inputs */}
            <button className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-700 hover:bg-gray-50 flex items-center">
              All videos
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-700 hover:bg-gray-50 flex items-center">
              All creators
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        {/* right side: action buttons aligned to far right */}
        <div className="flex items-center gap-3 text-sm justify-end">
          <button className="text-gray-500 hover:text-gray-800">
            Clear filters
          </button>

          <button className="px-3 py-2 rounded-sm bg-[#f2f2f2] flex items-center gap-2 hover:bg-gray-50">
            <MetricsIcon className="w-4 h-4" />
            Metrics
          </button>
          <button className="px-3 py-2 rounded-sm bg-[#f2f2f2] flex items-center gap-2 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Export
          </button>

          <button className="p-2 rounded-sm bg-[#f2f2f2] hover:bg-gray-50">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
        <div className="relative">
          <div className="overflow-x-auto">
            <div className="max-h-[520px] overflow-auto">
              <table className="w-full min-w-[980px] table-auto">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-700 w-[420px] sticky left-0 top-0 bg-white z-30"
                      style={{ boxShadow: "2px 0 6px -4px rgba(0,0,0,0.08)" }}
                    >
                      Video information
                    </th>

                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 min-w-[90px] sticky top-0 bg-gray-50 z-20">
                      <div className="flex items-center justify-end gap-1">
                        <span>GMV</span>
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                    </th>

                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 min-w-[140px] sticky top-0 bg-gray-50 z-20">
                      <div className="flex items-center justify-end gap-1">
                        <span>Affiliate items...</span>
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                    </th>

                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 min-w-[140px] sticky top-0 bg-gray-50 z-20">
                      <div className="flex items-center justify-end gap-1">
                        <span>Shoppable vi...</span>
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                    </th>

                    <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 min-w-[140px] sticky top-0 bg-gray-50 z-20">
                      <div className="flex items-center justify-end gap-1">
                        <span>Est. commissi...</span>
                        <Info className="w-4 h-4 text-gray-400" />
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {mockData.map((row, index) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td
                        className="px-4 py-4 bg-white sticky left-0 z-20"
                        style={{ width: 420 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
                            {row.badge ? (
                              <BadgeComponent type={row.badge} />
                            ) : (
                              <span className="text-sm font-semibold text-gray-400">
                                {index + 1}
                              </span>
                            )}
                          </div>
                          <div className="flex items-start gap-2 min-w-0">
                            <div className="w-8 h-8 bg-gray-300 rounded flex-shrink-0"></div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {row.title}
                              </p>
                              <div className="flex items-center gap-1 mt-1 text-xs">
                                <div className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></div>
                                <span className="text-xs text-gray-600">
                                  {row.creator}
                                </span>
                                <span className="text-xs text-gray-500 ml-2">
                                  {row.postTime}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        {row.gmv}
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        {row.affiliateItems}
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        {row.shoppableVideos}
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        {row.estimatedCommission}
                      </td>
                    </tr>
                  ))}

                  {/* filler rows to mimic longer list */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <tr
                      key={`filler-${i}`}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td
                        className="px-4 py-4 bg-white sticky left-0 z-20"
                        style={{ width: 420 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-8 h-8 flex-shrink-0">
                            <span className="text-sm font-semibold text-gray-400">
                              {mockData.length + i + 1}
                            </span>
                          </div>
                          <div className="flex items-start gap-2 min-w-0">
                            <div className="w-8 h-8 bg-gray-300 rounded flex-shrink-0"></div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                Placeholder title {i + 1}
                              </p>
                              <div className="flex items-center gap-1 mt-1 text-xs">
                                <div className="w-4 h-4 bg-gray-400 rounded-full flex-shrink-0"></div>
                                <span className="text-xs text-gray-600">
                                  @placeholder
                                </span>
                                <span className="text-xs text-gray-500 ml-2">
                                  Post time 01/01/2025
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        £0
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        0
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        £0
                      </td>
                      <td className="px-4 py-4 text-right text-sm font-medium text-gray-900">
                        £0
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* left / right fade overlays for nicer visual when horizontally scrollable */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default AnalyticVideo;
