import {
  Calendar,
  ChevronDown,
  Download,
  Info,
  RefreshCw,
  Search,
  X,
} from "lucide-react";

export default function AffiliateOrder() {
  return (
    <div className="px-6 pt-6 mx-52">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 ">
        <h1 className="theme-m4b-page-header-title-text text-3xl font-semibold text-gray-900 mb-2">
          Affiliate Orders
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 bg-[#e8e8e8] px-4 py-1 rounded-sm">
            Exported
          </span>
          <button className="flex items-center gap-2 px-4 py-1 bg-[#009995] text-white rounded-sm hover:bg-teal-600 transition">
            <Download size={18} />
            Export orders
          </button>
        </div>
      </div>

      <div className="">
        {/* Info Banner */}
        <div className="mb-6 flex items-start gap-4 px-4 py-2 bg-white border-l-4 border-[#595959] rounded">
          <Info size={20} className="text-gray-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            This page shows orders generated via Affiliate, and includes creator
            and commission information.
          </p>
          <button className="ml-auto flex-shrink-0 text-gray-400 hover:text-gray-600">
            <X size={15} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-8  mb-6">
          <button className="pb-3 px-1 font-semibold text-gray-900 border-b-2 border-[#009995]">
            Affiliate creator
          </button>
          <button className="pb-3 px-1 font-semibold text-gray-500 hover:text-gray-700">
            Affiliate partner
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg">
          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            {/* Product ID Dropdown */}
            <div className="flex items-center gap-2 px-4 py-1 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
              <span className="text-gray-700 font-medium">Product ID</span>
              <ChevronDown size={18} className="text-gray-500" />
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-2 px-4 py-1 bg-white border border-gray-300 rounded-md flex-grow">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search orders"
                className="flex-grow outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-2 px-4 py-1 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
              <span className="text-gray-700">2025-11-17</span>
              <span className="text-gray-500">-</span>
              <span className="text-gray-700">2025-11-23</span>
              <Calendar size={18} className="text-gray-500 ml-2" />
            </div>

            {/* Content Type Dropdown */}
            <div className="flex items-center gap-2 px-4 py-1 bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
              <span className="text-gray-500">Content type</span>
              <ChevronDown size={18} className="text-gray-500" />
            </div>

            {/* Refresh Button */}
            <button className="px-2 py-1 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
              <RefreshCw size={18} className="text-gray-600" />
            </button>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex  mb-6">
            <button className="px-4 py-1 bg-white border-2 border-[#009995] text-[#009995]  font-medium hover:bg-blue-50">
              All
            </button>
            <button className="px-4 py-1 bg-white border border-gray-300 text-gray-600  font-medium hover:bg-gray-50">
              Processing
            </button>
            <button className="px-4 py-1 bg-white border border-gray-300 text-gray-600 font-medium hover:bg-gray-50">
              Completed
            </button>
            <button className="px-4 py-1 bg-white border border-gray-300 text-gray-600 font-medium hover:bg-gray-50">
              Cancelled
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg ">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-gray-200 bg-white">
              <div className="font-semibold text-gray-900 text-sm">Order ID</div>
              <div className="font-semibold text-sm text-gray-900">Order status</div>
              <div className="font-semibold text-sm text-gray-900">Created at</div>
              <div className="font-semibold text-sm text-gray-900">Delivered at</div>
              <div className="font-semibold text-sm text-gray-900">
                Commission paid at
              </div>
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-24">
            <img src="/image33.svg"/>
              <p className="font-medium text-xs text-gray-500">The list is empty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
