"use client";

import { useState } from "react";
import { ChevronDown, Search, HelpCircle, X, Settings } from "lucide-react";

export default function SampleRequest() {
  const [activeMainTab, setActiveMainTab] = useState("free");
  const [activeStatusTab, setActiveStatusTab] = useState("all");
  const [creatorSearch, setCreatorSearch] = useState("");
  const [labelFilter, setLabelFilter] = useState("all");
  const [allFilter, setAllFilter] = useState("all");
  const [showBanner, setShowBanner] = useState(true);
  const [recommended, setRecommended] = useState(false);

  const statusTabs = [
    { id: "all", label: "All", count: null },
    { id: "to-review", label: "To Review", count: 0 },
    { id: "ready-to-ship", label: "Ready to Ship", count: 0 },
    { id: "shipped", label: "Shipped", count: 0 },
    { id: "in-progress", label: "In-progress", count: 0 },
    { id: "completed", label: "Completed", count: null },
    { id: "cancelled", label: "Cancelled", count: null },
  ];

  return (
    <div className="px-6 pt-6 mx-52 ">
      {/* Header */}
      <div className="">
        <div className="py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-semibold text-gray-900">
              Sample Requests
            </h1>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              View bills
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="">
        <div className="">
          <div className="flex gap-8 pb-2">
            {["Free samples", "Refundable samples"].map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveMainTab(tab.toLowerCase().replace(" ", "-"))
                }
                className={`border-b-2 px-0 py-2 text-sm font-semibold transition-colors ${
                  activeMainTab === tab.toLowerCase().replace(" ", "-")
                    ? "border-teal-500 text-gray-900"
                    : "border-transparent text-gray-800 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6 lg:px-8 rounded-lg">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 overflow-x-auto">
          {statusTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveStatusTab(tab.id)}
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${
                activeStatusTab === tab.id
                  ? "text-teal-600"
                  : "text-gray-900 hover:text-gray-900"
              }`}
            >
              {tab.label}
              {tab.count !== null && (
                <span className="ml-1 text-gray-500">{tab.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Filters row - EXACT like Image 2 */}
        <div className="mt-4 flex flex-wrap items-end gap-4">
          {/* Creator Name */}
          <div className="w-full sm:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="creator name"
                value={creatorSearch}
                onChange={(e) => setCreatorSearch(e.target.value)}
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-2 text-md
                     text-gray-900 placeholder-gray-900 focus:border-teal-500 focus:outline-none
                     focus:ring-1 focus:ring-teal-500"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Label (text inside field - no separate label above) */}
          <div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">
              {labelFilter || "Label"}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Filter (same structure as Image 2) */}
          <div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">
              {allFilter || "All"}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Filter button */}
          <div className="sm:ml-auto">
            <button className="mt-6 inline-flex items-center gap-2 rounded-sm  bg-[#f2f2f2] px-4 py-2 text-sm font-medium  hover:bg-gray-200">
              <Settings className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Recommended */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="recommended"
            checked={recommended}
            onChange={(e) => setRecommended(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
          />
          <label
            htmlFor="recommended"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer"
          >
            Recommended
            <HelpCircle className="h-4 w-4 text-gray-400" />
          </label>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 sm:px-6 lg:px-8 bg-white my-6 rounded-lg">
        {/* Filters */}

        {/* Info Banner */}
        {showBanner && (
          <div className="mb-6 rounded-lg border-l-4 border-[#595959]  p-2">
            <div className="flex gap-3">
              <HelpCircle className="h-4 w-4 flex-shrink-0 text-gray-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  If a creator goes LIVE featuring samples, only shoppable LIVE
                  streams that generate at least 1 sale will appear in completed
                  requests.{" "}
                  <button className="font-semibold text-[#0099a1] ">
                    Learn more
                  </button>
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Automations Button */}
        <div className="mb-6 flex justify-end">
          <button className="inline-flex items-center gap-2 rounded-sm  bg-[#f2f2f2] px-4 py-2 text-sm font-medium  hover:bg-gray-200">
            <Settings className="h-4 w-4" />
            Automations
          </button>
        </div>

        {/* Table Section */}
        <div className="rounded-md border border-gray-200 bg-white overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 border-b border-gray-200 bg-[#f5f5f5] px-6 py-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-sm font-semibold text-gray-900">
                Creators
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">
                Followers
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">
                Est. post rate
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">
                Sales volume
              </span>
              <HelpCircle className="h-4 w-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">
                Average views per video
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center px-6 py-16">
            <div className="mb-6 text-center">
              {/* Clipboard Illustration Placeholder */}
              <div className="inline-flex  items-center justify-center rounded-lg  mb-4">
          
                <img src="/image33.svg"/>
              </div>
              <p className="text-center text-gray-600 text-sm mb-1">
                Creator sample requests will appear here.
              </p>
              <p className="text-center text-gray-600 text-sm">
                You can offer free samples to creators in both open and{" "}
                <br className="hidden sm:inline" />
                target collaborations.
              </p>
              <button className="mt-3 text-sm font-semibold text-teal-600 hover:text-teal-700">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
