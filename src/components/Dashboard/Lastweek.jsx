// src/components/Lastweek.jsx
import React from "react";

const Lastweek = () => {
  return (
    <section className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Shop Metrics Widget */}
      <article className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-6">
          <select className="px-3 py-2 text-sm">
            <option value="7">Last 7 days</option>
          </select>
          <div className="flex items-center gap-3">
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
            <button className="text-gray-600 hover:text-gray-900 p-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3146 1.78116C12.0492 1.53346 11.6352 1.54059 11.3786 1.79729L6.51321 6.66279C6.38688 6.78913 6.3159 6.96048 6.3159 7.13916V9.0105C6.3159 9.38257 6.61751 9.68419 6.98957 9.68419H8.7361C8.91476 9.68419 9.08611 9.61321 9.21245 9.48687L14.2025 4.49662C14.3317 4.36743 14.4029 4.19131 14.3998 4.00864C14.3966 3.82597 14.3194 3.65241 14.1858 3.52775L12.3146 1.78116ZM7.66323 7.41821L11.871 3.21025L12.7568 4.03696L8.45706 8.33682H7.66323V7.41821ZM7.66282 1.59998C7.84884 1.59998 7.99965 1.75078 7.99965 1.93682V2.6105C7.99965 2.79653 7.84884 2.94734 7.66282 2.94734H3.62084C3.24879 2.94734 2.94718 3.24896 2.94718 3.62103V12.3789C2.94718 12.751 3.24879 13.0526 3.62084 13.0526H12.3785C12.7505 13.0526 13.0521 12.751 13.0521 12.3789V8.33682C13.0521 8.15078 13.2029 7.99998 13.3889 7.99998H14.0626C14.2486 7.99998 14.3994 8.15078 14.3994 8.33682V12.3789C14.3994 13.4951 13.4946 14.4 12.3785 14.4H3.62084C2.50468 14.4 1.59985 13.4951 1.59985 12.3789V3.62103C1.59985 2.50483 2.50468 1.59998 3.62084 1.59998H7.66282Z"
                  fillOpacity="1"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="text-center">
              <div className="h-4 bg-[#f5f5f5] rounded animate-pulse mb-2"></div>
              <div className="h-6 bg-[#f5f5f5] rounded animate-pulse mb-1"></div>
              <div className="h-3 bg-[#f5f5f5] rounded animate-pulse"></div>
            </li>
          ))}
        </ul>
      </article>

      {/* Shop Health Widget */}
      <article className="bg-white rounded-lg shadow-sm p-6">
        <div className="h-6 bg-[#f5f5f5] rounded animate-pulse mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-[#f5f5f5] rounded animate-pulse"></div>
          <div className="h-4 bg-[#f5f5f5] rounded animate-pulse"></div>
          <div className="h-4 bg-[#f5f5f5] rounded animate-pulse"></div>
        </div>
      </article>
    </section>
  );
};

export default Lastweek;
