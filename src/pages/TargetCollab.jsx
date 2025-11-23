"use client";

import { useState } from "react";
import { Search, Info, ChevronDown } from "lucide-react";
// import ClipboardIcon from "@/components/clipboard-icon"

export default function TargetCollab() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [invitationSearch, setInvitationSearch] = useState("");
  const [creatorSearch, setCreatorSearch] = useState("");

  const tabs = [
    { id: "ongoing", label: "Ongoing", count: 0 },
    { id: "expiring", label: "Expiring", count: 0 },
    { id: "cancelling", label: "Cancelling", count: 0 },
    { id: "completed", label: "Completed", count: 111 },
  ];

  return (
    <div className="px-6  py-6 mx-52 pb-40">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Target collaboration
          </h1>
          <div className="flex items-center gap-4">
            <div className="bg-[#e8e8e8] px-4 py-1 rounded-sm  flex items-center gap-2">
              <span className="text-gray-900 text-sm font-medium">
                Remaining creator limit
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                0
              </span>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-1 rounded-sm font-medium transition">
              Invite to collaborate
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white px-8 py-6 ">
        <div className="flex gap-4 mb-4">
          {/* Invitation Name Dropdown */}
          <div className="flex-1 relative">
            <div className="flex items-center border border-gray-200 rounded-lg bg-white">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium hover:bg-gray-50">
                <span>Invitation name</span>
                <ChevronDown size={18} />
              </button>
              <div className="flex-1 border-l border-gray-200">
                <input
                  type="text"
                  placeholder="Search by invitation name"
                  value={invitationSearch}
                  onChange={(e) => setInvitationSearch(e.target.value)}
                  className="w-full px-4 py-2 outline-none text-gray-600 placeholder-gray-400"
                />
              </div>
              <button className="px-4 py-2 text-gray-400 hover:text-gray-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Creator Username Search */}
          <div className="flex-1 relative">
            <div className="flex items-center border border-gray-200 rounded-lg bg-white">
              <input
                type="text"
                placeholder="Search by creator username"
                value={creatorSearch}
                onChange={(e) => setCreatorSearch(e.target.value)}
                className="w-full px-4 py-2 outline-none text-gray-600 placeholder-gray-400"
              />
              <button className="px-4 py-2 text-gray-400 hover:text-gray-600">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 font-medium flex items-center gap-2">
            Accepted invitations
            <Info size={18} className="text-gray-400" />
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
            With free samples
          </button>
          <button className="ml-auto text-teal-600 hover:text-teal-700 font-medium">
            Reset
          </button>
        </div>
      </div>
      <div className="py-2 bg-[#f5f5f5"></div>

      {/* Tabs Section */}
      <div className="bg-white px-8 py-4 ">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 font-medium flex items-center gap-2 border-b-2 transition ${
                activeTab === tab.id
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={
                  activeTab === tab.id ? "text-teal-600" : "text-gray-600"
                }
              >
                {tab.count}
              </span>
              {tab.id !== "ongoing" && (
                <Info size={16} className="text-gray-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table Headers */}
      <div className="bg-white px-8 py-4 ">
        <div className="grid grid-cols-4 gap-8 text-gray-600 text-sm font-medium">
          <div>Invitation</div>
          <div className="flex items-center gap-2">
            Creators accepted
            <Info size={16} className="text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            Creators promoted
            <Info size={16} className="text-gray-400" />
          </div>
          <div>Action</div>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-white px-8 py-24 text-center">
        <div className="flex justify-center mb-6">
          {/* <ClipboardIcon /> */}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          No collaborations
        </h2>
        <p className="text-gray-500">
          You don't have any collaborations in this state.
        </p>
      </div>
    </div>
  );
}
