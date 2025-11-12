import { useState } from "react";
import {
  AlertTriangle,
  Search,
  X,
  Settings,
  DollarSign,
  Copy,
  ChevronDown,
} from "lucide-react";

function ManageReturn() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [alertVisible, setAlertVisible] = useState(true);

  const summaryCards = [
    { label: "Respond within 24 hours", value: 0 },
    { label: "Auto-approved (last 7d)", value: 0 },
    { label: "Can be appealed", value: 0 },
    { label: "Disputes awaiting response", value: 0 },
  ];

  const tabs = [
    { key: "all", label: "All", count: null },
    { key: "awaitingAction", label: "Awaiting your action", count: 0 },
    {
      key: "awaitingCustomer",
      label: "Awaiting TikTok Shop/customer action",
      count: 0,
    },
    { key: "appealed", label: "Appealed/disputed", count: null },
    { key: "resolved", label: "Resolved", count: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Alert */}
        {alertVisible && (
          <div className="bg-white border-l-4 border-[#d3a323] shadow-md p-2 mb-6 rounded">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-[#d3a323] mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <span className="text-gray-800">
                    You have <span className="font-semibold">0/30 orders</span>{" "}
                    for today. The count will be reset the next day at 00:00:00.
                  </span>{" "}
                  <a
                    href="#"
                    className="text-[#017b77]  font-medium hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <button
                onClick={() => setAlertVisible(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-6 text-center">
          <h1 className="text-[28px] font-bold text-gray-900  py-2">
            Manage Returns/Refunds
          </h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search return order ID, order ID, or i"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-sm text-sm w-64 bg-white"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#e8e8e8]  rounded-sm hover:bg-[#e2e2e2] cursor-pointer">
              <Settings className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium">Return settings</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#e8e8e8] rounded-sm hover:bg-[#e2e2e2] cursor-pointer">
              <DollarSign className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium">Chargebacks</span>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="w-full bg-[#f9f9f9] py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-md shadow-sm">
            {summaryCards.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col  justify-center p-6  relative
        ${
          index !== summaryCards.length - 1
            ? 'lg:after:content-[""] lg:after:absolute lg:after:top-6 lg:after:bottom-6 lg:after:right-0 lg:after:w-[1px] lg:after:bg-gray-200'
            : ""
        }`}
              >
                <div className="text-[14px] ">{card.label}</div>
                <div className="text-[18px] font-bold text-gray-900 mt-1">
                  {card.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-[#fafafa] min-h-screen py-6">
          <div className="bg-white rounded-lg  ">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 bg-[#f9fafb] text-sm text-gray-700 px-4">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 border-b-2 transition-all font-bold ${
                    activeTab === tab.key
                      ? "border-green-500 text-green-600 "
                      : "border-transparent hover:text-gray-900  "
                  }`}
                >
                  {tab.label}
                  {tab.count !== null && (
                    <span className="ml-1 text-gray-400">{tab.count}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Toolbar */}
            <div className="flex justify-end gap-2 px-4 py-3 border-b border-gray-100">
              {["⚙", "⇅", "↓"].map((icon, index) => (
                <button
                  key={index}
                  className="w-8 h-8 flex items-center justify-center rounded bg-[#f2f2f2] hover:bg-[#ebebeb] text-gray-700"
                >
                  {icon}
                </button>
              ))}
            </div>

            {/* Order Card */}
            <div className="p-5 border-b border-gray-100">
              <div className="flex justify-between items-center mb-3 ">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    Order ID:
                  </span>
                  <span className="font-mono text-sm text-gray-900">
                    5767859612221832225
                  </span>
                  <Copy className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>martinofpeartree</span>
                  <span>13/09/2025 07:19:42</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-800">
                      Refund only
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs">
                    Reason: Missing products or accessories
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">1 item</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>

                <div>
                  <div>
                    <span className="text-gray-600">Paid:</span>
                    <span className="font-semibold text-gray-900 ml-2">
                      £0.00
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Refund:</span>
                    <span className="font-semibold text-gray-900 ml-2">
                      £0.00
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-800 font-medium">
                      Refund complete
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center gap-2 p-4">
              <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded">
                ‹
              </button>
              <button className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded text-sm bg-white shadow-sm">
                1
              </button>
              <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageReturn;
