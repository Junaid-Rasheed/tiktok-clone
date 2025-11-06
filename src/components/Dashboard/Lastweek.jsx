import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, RefreshCw, TrendingUp, AlertCircle, Gauge,Shield,ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Metrics Values Per Period
const metricsByPeriod = {
  today: [
    { title: "GMV", value: "£10.00", change: null },
    { title: "Customers", value: "1", change: null },
    { title: "Ordered SKUs", value: "2", change: null },
    { title: "Visitors", value: "20", change: "40%" },
  ],
  last_7_days: [
    { title: "GMV", value: "£120.00", change: null },
    { title: "Customers", value: "8", change: null },
    { title: "Ordered SKUs", value: "12", change: null },
    { title: "Visitors", value: "200", change: "200%" },
  ],
  last_28_days: [
    { title: "GMV", value: "£420.00", change: null },
    { title: "Customers", value: "25", change: null },
    { title: "Ordered SKUs", value: "40", change: null },
    { title: "Visitors", value: "850", change: "500%" },
  ],
};

// Shop Health Carousel Data
const shopHealthCards = [
  {
    id: 1,
    type: "status",
    title: "Shop Health",
    status: "Good",
    description: "Regular monitoring helps prevent violations that may affect your store.",
    icon: AlertCircle,
  },
  {
    id: 2,
    type: "volume",
    title: "Shop Volume",
    progress: 66.7,
    progressText: "4/6",
    description: "Achieve all targets to lift limits",
    limits: [
      { label: "Daily order limit", current: "0", total: "100" },
      { label: "Daily listing limit", current: "0", total: "3000" },
    ],
    icon: Shield,
  },
];

export default function Lastweek() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days");

  // ✅ Default is last_7_days
  const [metricsData, setMetricsData] = useState(metricsByPeriod.last_7_days);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const periods = [
    { label: "Today", value: "today" },
    { label: "Last 7 days", value: "last_7_days" },
    { label: "Last 28 days", value: "last_28_days" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ When selecting period: update selected label + metrics
  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period.label);
    setMetricsData(metricsByPeriod[period.value]); // ✅ update metrics
    setIsDropdownOpen(false);
  };

  const nextCard = () => {
    setCurrentCardIndex((prev) =>
      prev === shopHealthCards.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) =>
      prev === 0 ? shopHealthCards.length - 1 : prev - 1
    );
  };

  const currentCard = shopHealthCards[currentCardIndex];
  const IconComponent = currentCard.icon;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
      {/* LEFT SIDE – METRICS */}
      <div className="lg:col-span-2 bg-white rounded-lg px-6 pt-6 pb-2 flex flex-col gap-6 shadow-sm">

        {/* Top Bar */}
        <div className="flex justify-between items-center w-full">
          <div className="relative">
            <button
              ref={triggerRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              {selectedPeriod}
              <ChevronDown
                size={16}
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 8px 20px" }}
              >
                <div className="py-1 max-h-48 overflow-y-auto">
                  {periods.map((period) => (
                    <button
                      key={period.value}
                      onClick={() => handlePeriodSelect(period)}
                      className={`flex items-center gap-3 w-full px-3 py-2 text-sm transition-colors ${
                        selectedPeriod === period.label
                          ? "bg-teal-50 text-teal-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center w-4 h-4 border rounded-full transition-colors ${
                          selectedPeriod === period.label
                            ? "border-teal-500 bg-teal-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedPeriod === period.label && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </div>
                      <span>{period.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">
              Updated on 31 Oct 19:00 (GMT+00:00)
            </p>

            <button className="hover:bg-gray-100 p-2 rounded transition-colors">
              <RefreshCw size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* ✅ Metrics Cards */}
        <div className="flex gap-6 flex-nowrap">
          {metricsData.map((m, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 w-[168px] p-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group relative"
            >
              <div className="flex items-center justify-between w-full">
                <div className="text-gray-500 text-sm font-medium">{m.title}</div>
                <ChevronDown
                  size={16}
                  className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity rotate-[-90deg]"
                />
              </div>

              <div className="text-2xl font-semibold text-gray-900">
                {m.value}
              </div>

              {m.change && (
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp size={14} className="text-green-600" />
                  <span className="text-green-600 font-medium">+ {m.change}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE – SHOP HEALTH CAROUSEL */}
      <div className="bg-[#fafafa] rounded-lg px-6 pt-6 pb-2 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <IconComponent size={22} className="text-gray-700" />
            <h2 className="text-lg font-semibold text-gray-900">{currentCard.title}</h2>
          </div>

          <div className="flex gap-1">
            <button
              onClick={prevCard}
              disabled={shopHealthCards.length <= 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
        
                  <ChevronLeft size={18} className="text-gray-600" />

            </button>

            <button
              onClick={nextCard}
              disabled={shopHealthCards.length <= 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
               <ChevronRight size={18} className="text-gray-600" />

            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {currentCard.type === "status" && (
            <div className="flex flex-col gap-4">
              <p className="text-green-600 font-semibold text-base">{currentCard.status}</p>
              <p className="text-gray-500 text-sm leading-5">{currentCard.description}</p>
            </div>
          )}

          {currentCard.type === "volume" && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-[62px] h-[62px]">
                  <svg className="w-[62px] h-[62px] transform -rotate-90" viewBox="0 0 62 62">
                    <circle cx="31" cy="31" r="28" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                    <circle
                      cx="31"
                      cy="31"
                      r="28"
                      fill="none"
                      stroke="#009995"
                      strokeWidth="6"
                      strokeDasharray="175.929"
                      strokeDashoffset="58.6431"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-900">{currentCard.progressText}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start flex-1">
                  <div className="text-gray-900 font-semibold text-base mb-1">{currentCard.title}</div>
                  <div className="text-gray-500 text-sm">{currentCard.description}</div>
                </div>
              </div>

              <div className="space-y-4">
                {currentCard.limits.map((limit, index) => (
                  <div key={index} className="flex justify-between items-center mb-0 mx-4">
                    <div className="flex items-center gap-3">
                      <Shield size={16} className="text-gray-500" />
                      <span className="text-gray-600 text-xs">{limit.label}</span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-900 font-semibold text-base">{limit.current}</span>
                      <span className="text-gray-500 text-sm">/{limit.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
