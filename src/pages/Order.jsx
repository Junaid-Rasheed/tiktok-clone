import { useState } from "react";
import {
  Search,
  Upload,
  MoreHorizontal,
  X,
  ChevronRight,
  ChevronLeft,
  Package,
  Settings,
  Settings2,
  Filter,
} from "lucide-react";

function Order() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const tabs = [
    "All",
    "To ship",
    "Shipped",
    "Completed",
    "Pending",
    "Cancelled",
  ];

  const orders = [
    {
      id: "576792398507121296",
      customer: "jasontok_reviews",
      items: 1,
      status: "Completed",
      shippingMethod: "Shipped by seller",
      deliveryOption: "Standard shipping",
      date: "27/09/2025 17:14:00",
      badge: "Free sample",
      trackingCode: "Royal Mail, 02135CF603CD8...",
      total: "£0.00",
    },
    {
      id: "576792399013255705",
      customer: "ttsbupsandfinds",
      items: 1,
      status: "Completed",
      shippingMethod: "Shipped by seller",
      deliveryOption: "Standard shipping",
      date: "27/09/2025 17:13:26",
      badge: "Free sample",
      trackingCode: "Royal Mail, 02135CF603CD8...",
      total: "£0.00",
    },
    {
      id: "576792398505941374",
      customer: "gemmanyers0",
      items: 1,
      status: "Completed",
      shippingMethod: "Shipped by seller",
      deliveryOption: "Standard shipping",
      date: "27/09/2025 17:12:22",
      badge: "Free sample",
      trackingCode: "Royal Mail, 02135CF603CD8...",
      total: "£0.00",
    },
    {
      id: "576788864548706537",
      customer: "houstonlani",
      items: 1,
      status: "Canceled",
      shippingMethod: "Shipped by seller",
      deliveryOption: "Standard shipping",
      date: "18/09/2025 06:21:24",
      badge: "Free sample",
      trackingCode: "",
      total: "£0.00",
    },
    {
      id: "576788864613718852",
      customer: "chrissym220",
      items: 1,
      status: "Canceled",
      shippingMethod: "Shipped by seller",
      deliveryOption: "Standard shipping",
      date: "18/09/2025 06:21:11",
      badge: "Free sample",
      trackingCode: "Royal Mail, 02135CF603CD8...",
      total: "£0.00",
    },
    {
      id: "576788864613522366",
      customer: "welurvegadgets",
      items: 1,
      status: "Canceled",
      shippingMethod: "Shipped by seller",
      deliveryOption: "Standard shipping",
      date: "18/09/2025 06:21:11",
      badge: "Free sample",
      trackingCode: "",
      total: "£0.00",
    },
  ];

  const actionItems = [
    { label: "Ship within 24 hours or less", count: 0 },
    { label: "Auto-cancelling within 24 hours or less", count: 0 },
  ];

  const descriptionItems = [
    { label: "Shipping overdue", count: 0 },
    { label: "Cancellation requested", count: 0 },
    { label: "Logistics issue", count: 0 },
    { label: "Return/refund requested", count: 0 },
  ];

  return (
    <div className="px-6 pt-6 mx-52">
      <div className="max-w-[1400px] mx-auto">
        {/* Updated Header Section */}
        <div className="theme-m4b-page-header mb-6">
          <div className="theme-m4b-page-header-head">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-4">
              {/* LEFT SIDE — Title */}
              <div className="theme-m4b-page-header-head-main">
                <div className="theme-m4b-page-header-title-main">
                  <div className="theme-m4b-page-header-title">
                    <div className="theme-m4b-page-header-title-text text-3xl font-semibold text-gray-900 mb-2">
                      Manage Orders
                    </div>
                  </div>
                  <div className="theme-m4b-page-header-sub-title">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-[#017b77]"
                        viewBox="0 0 16 17"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.9867 2.37899C14.9867 1.91931 14.5325 1.59756 14.0988 1.75011L6.35783 4.47335V9.73507L14.0988 12.4583C14.5325 12.6109 14.9867 12.2891 14.9867 11.8294V2.37899ZM1.68034 9.74101C1.31215 9.74101 1.01367 9.44254 1.01367 9.07435V5.13401C1.01367 4.76582 1.31215 4.46735 1.68034 4.46735H5.75139V9.74101H5.71734L6.53548 13.7705C6.61935 14.1835 6.30364 14.5698 5.88214 14.5698H3.99344C3.67639 14.5698 3.40319 14.3465 3.34011 14.0358L2.4681 9.74101H1.68034Z"
                        />
                      </svg>
                      <div className="flex items-center">
                        <div className="line-clamp-1">
                          Learn about order fulfilment
                        </div>
                        <a
                          href="#"
                          className="text-[#017b77] hover:underline ml-1"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE — Search + Buttons */}
              <div className="theme-m4b-page-header-head-extra">
                <div className="flex flex-col justify-end h-full">
                  <div className="flex justify-end">
                    <div className="flex items-center gap-2 mt-2">
                      {/* Search Input */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search order ID/product ID/product name/SKU ID/tracking number/seller SKU/SKU name, separate by semicolon."
                          className="w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>

                      {/* Buttons */}
                      <button className="px-4 py-2 rounded-sm bg-[#e8e8e8] hover:bg-gray-50 text-sm font-medium">
                        Shipping labels
                      </button>
                      <button className="px-4 py-2  rounded-sm bg-[#e8e8e8] hover:bg-gray-50 text-sm font-medium flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Upload
                      </button>
                      <button className="px-2 py-2  rounded-sm bg-[#e8e8e8] hover:bg-gray-50">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Needed Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6 px-6 pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-5 h-5" />
            <h2 className="font-semibold text-lg">Action needed</h2>
          </div>
          <div className="flex items-center gap-6 overflow-x-auto py-2">
            {[...actionItems, ...descriptionItems].map((item, index) => (
              <div key={index} className="flex flex-col  px-4 ">
                <div className="text-sm items-center">{item.label}</div>
                <div className="text-md font-semibold mt-2 items-start">
                  {item.count}
                </div>
              </div>
            ))}
          </div>
          <hr className="-mx-6 border-t border-gray-300 py-1" />
          <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer py-2">
            <span>2-day shipping success rate --</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Orders Table Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 cursor-pointer text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 px-6">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-[7px] rounded-md  hover:bg-[#ebebeb] text-sm bg-[#e8e8e8] cursor-pointer leading-tighter">
                  <span className="text-md">
                    <Settings2 className="w-4 h-4" />
                  </span>
                  Filter
                </button>
                <span className="text-sm text-gray-600 leading-tighter">
                  Found 56 orders
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-[7px] font-semibold  rounded-md hover:bg-[#ebebeb] text-sm bg-[#e8e8e8] cursor-pointer leading-tighter">
                  <span>⇅</span>
                  Sort by
                </button>
                <button className="flex items-center gap-2 px-4 py-[7px] font-semibold  rounded-md bg-[#e8e8e8] cursor-pointer leading-tighter hover:bg-[#ebebeb] text-sm">
                  <span>↗</span>
                  Export
                </button>
                <button className="px-2 py-[7px]  rounded-md bg-[#e8e8e8]  cursor-pointer leading-tighter hover:bg-[#ebebeb]">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto ">
              <table className="w-full min-w-[1350px]">
                <thead>
                  <tr className="border-b border-gray-100 bg-[#f8f8f8] text-gray-700">
                    <th className="text-left py-6 px-6 text-xs font-medium  w-10 sticky left-0 bg-[#f8f8f8] z-30">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium  sticky left-10 bg-[#f8f8f8] z-30 min-w-[220px]">
                      Order
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium  min-w-[140px] whitespace-nowrap">
                      Customer
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium  min-w-[100px]">
                      Items
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium  min-w-[140px] whitespace-nowrap">
                      Order status
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium  min-w-[180px] whitespace-nowrap">
                      Shipping method
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium  min-w-[150px] whitespace-nowrap">
                      Delivery option
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium  min-w-[100px]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="py-4 px-6 sticky left-0 bg-white z-20">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-4 px-6 sticky left-10 bg-white z-20 min-w-[220px]">
                        <div className="font-medium text-gray-900 text-sm">
                          {order.id}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          <span className="inline-block bg-[#eeeeee] text-gray-800 px-2 py-0.5 rounded text-xs font-semibold leading-tight">
                            {order.badge}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {order.date}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900 text-sm min-w-[140px]">
                        {order.customer}
                      </td>
                      <td className="py-4 px-6 text-sm min-w-[100px]">
                        <div className="font-medium text-gray-900">
                          {order.items} item
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm min-w-[140px]">
                        <span className={`font-medium text-black`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm min-w-[180px]">
                        <div className="text-gray-900">
                          {order.shippingMethod}
                          {order.trackingCode && (
                            <div className="text-xs text-gray-500 mt-1 leading-tight">
                              {order.trackingCode}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900 text-sm min-w-[150px]">
                        {order.deliveryOption}
                      </td>
                      <td className="py-4 px-6 text-gray-900 font-medium text-sm min-w-[100px]">
                        {order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
              <div className="text-sm text-gray-600">
                Only orders from the last 12 months are displayed (06/11/2024 -
                06/11/2025)
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 rounded bg-[#f2f2f2] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="px-2  bg-white border border-[#009995] text-black rounded">
                  {currentPage}
                </button>
                <button className="px-2  bg-[#f2f2f2] rounded hover:bg-gray-50 text-gray-800">
                  2
                </button>
                <button className="px-2  bg-[#f2f2f2] rounded hover:bg-gray-50 text-gray-800">
                  3
                </button>
                <button className="p-1  bg-[#f2f2f2] rounded hover:bg-gray-50 text-gray-800">
                  <ChevronRight className="w-4 h-4" />
                </button>
                <select className="ml-2 bg-[#f2f2f2]  p-1  rounded text-sm text-gray-800">
                  <option>20/Page</option>
                  <option>50/Page</option>
                  <option>100/Page</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
