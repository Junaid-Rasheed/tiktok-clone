"use client";

import { useState } from "react";
import {
  Calendar,
  Download,
  Share2,
  BarChart3,
  HelpCircle,
   Search,
  Pencil,
  FileText,
  Info,
  ChevronDown,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Performance() {
  const [showTrends, setShowTrends] = useState(false);
  const [activeTab, setActiveTab] = useState("collaboration");
  const [breakdownType, setBreakdownType] = useState("gmv");

  const chartData = [
    { date: "Nov 15", value: 0 },
    { date: "Nov 16", value: 0 },
    { date: "Nov 17", value: 0 },
    { date: "Nov 18", value: 0 },
    { date: "Nov 19", value: 0 },
    { date: "Nov 20", value: 0 },
    { date: "Nov 21", value: 0 },
  ];

  const metrics = [
    { label: "GMV", value: "£0.00" },
    { label: "Items sold", value: "0" },
    { label: "Refunds", value: "£0.00" },
    { label: "Est. commission", value: "£0.00" },
    { label: "Videos", value: "0" },
    { label: "LIVE streams", value: "0" },
    { label: "Avg. daily creators with sales", value: "0" },
    { label: "Avg. daily creators posted content", value: "0" },
  ];

  return (
    <div className="px-6 pt-6 mx-52">
      {/* Header */}
      <div className="bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Performance
            </h1>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="text-sm text-gray-500">(GMT+0:00)</span>

              <button className="flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-10 py-1.5 text-sm hover:bg-gray-100">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">
                  Last 7 days: 11/15/2025 - 11/21/2025
                </span>
                <span className="sm:hidden">Last 7 days</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {/* Key Collaboration Metrics */}
        <div className="mb-8 bg-white p-6 rounded-md ">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold">Key collaboration metrics</h2>

            <div className="flex items-center gap-3">
              {/* Toggle */}
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="  h-6 w-11 rounded-full bg-gray-300">
                  <input
                    type="checkbox"
                    checked={showTrends}
                    onChange={(e) => setShowTrends(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`h-3 w-3 bg-white mt-1 rounded-full transition ${
                      showTrends ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </div>
                <span className="text-sm">Show trends</span>
              </label>

              <button className="rounded-lg p-2 hover:bg-gray-100">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="rounded-lg p-2 hover:bg-gray-100">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, idx) => (
              <div key={idx} className="rounded-sm bg-white  p-4">
                <div className="mb-3 flex items-center gap-1">
                  <span className="text-sm text-gray-900">{metric.label}</span>
                  <HelpCircle className="h-4 w-4 text-gray-700" />
                </div>

                <p className="flex items-center gap-1 text-xl font-semibold text-gray-800">
                  {metric.value}
                  <ChevronDown className="h-3 w-3" />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown Section */}
        <div className="rounded-md bg-white p-6 ">
          {/* Header */}
          {/* Breakdown Header + Tabs in one row */}
          <div className="mb-6 flex items-center justify-between">
            {/* Left Section: Breakdown + Dropdown */}
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">Breakdown</h3>

              <button className="flex items-center rounded-md py-2 text-sm hover:bg-gray-100 text-gray-600">
                <span className="uppercase">{breakdownType}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Right Section: Tabs */}
            <div className="flex gap-6 border px-1 border-gray-200">
              {["Collaboration", "Content type", "Product category"].map(
                (tab) => {
                  const id = tab.toLowerCase().replace(" ", "-");
                  const active = activeTab === id;

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(id)}
                      className={`py-1 text-sm font-medium rounded-sm ${
                        active
                          ? "text-[#02a5a0] border px-2 border-[#02a5a0]"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Chart Area */}
          <div className="flex  items-center justify-center py-8  rounded-lg">
            {/* Donut No Data */}
            <div className="flex justify-center mb-4">
              <div className="h-40 w-40 rounded-full border-[14px] border-gray-200 flex items-center justify-center text-gray-400 text-sm">
                No Data
              </div>
            </div>

            {/* Line Chart */}
            <div className="w-full mt-6">
              <ResponsiveContainer width="100%" height={190}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" stroke="#9ca3af" fontSize={11} />
                  <YAxis stroke="#9ca3af" fontSize={11} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>



        {/* Details Section */}
       <div className="mt-10 bg-white p-6 rounded-md">
      <h3 className="mb-4 text-xl font-semibold ">Details</h3>

      {/* Tabs */}
      <div className="flex gap-8 ">
        {["Creators", "Products", "Videos", "LIVE streams"].map((tab, i) => (
          <button
            key={tab}
            className={`pb-3 text-sm font-medium ${
              i === 0
                ? "border-b-2 border-[#02a5a0] text-[#02a5a0]"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-4">
          {/* Collaboration type dropdown */}
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Collaboration type</option>
            <option>All</option>
          </select>

          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Creator name"
              className="border border-gray-300 rounded-md px-3 py-2 pl-10 text-sm w-64"
            />
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>
        </div>

        {/* Right-side buttons */}
        <div className="flex items-center gap-3">
          <button className="border px-2 py-1 rounded-md text-gray-600 hover:bg-gray-100">
            <Pencil size={16} />
          </button>
          <button className="border px-4 py-1 rounded-md text-gray-600 hover:bg-gray-100 text-sm flex items-center gap-2">
            <Download size={16} />
            Export
          </button>
          <button className="border px-2 py-1 rounded-md text-gray-600 hover:bg-gray-100">
            <FileText size={16} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 border border-gray-200 rounded-md overflow-hidden">
        <div className="grid grid-cols-5 bg-[#f5f5f5] px-6 py-3 text-sm font-medium text-gray-600">
          <span>Creator</span>

          <span className="flex items-center gap-1">
            GMV
            <Info size={14} className="text-gray-400" />
            <ChevronDown size={14} />
          </span>

          <span className="flex items-center gap-1">
            Refunds
            <Info size={14} className="text-gray-400" />
          </span>

          <span className="flex items-center gap-1">
            Est. commission
            <Info size={14} className="text-gray-400" />
          </span>

          <span className="flex items-center gap-1">
            Orders
            <Info size={14} className="text-gray-400" />
          </span>
        </div>

        {/* Empty state */}
        <div className="py-20 flex flex-col items-center text-gray-400">
          <Search size={48} strokeWidth={1.4} />
          <div className="mt-2 text-sm">No search results</div>
        </div>
      </div>
    </div>


      </div>
    </div>
  );
}
