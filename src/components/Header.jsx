import { Search, Bell, Headset, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#131212] text-white fixed top-0 w-full min-w-[1000px] z-50">
      <nav
        aria-label="Main"
        className="flex items-center justify-between h-[60px] px-4"
      >
        {/* Left Section: Logo + Title */}
        <div className="header-left flex items-center gap-3">
          <a href="#" aria-label="TikTok Shop Seller Center" className="logo" />

          <span className="divider h-4 w-px mx-1 bg-white" />
          <span className="page-title text-[21px] font-medium">
            Seller Center
          </span>

          {/* Search */}
          <div className="search-container relative flex items-center ml-6">
            <Search
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-[#b0b0b0]"
            />
            <input
              type="text"
              className="search-input w-96 bg-[#3d3d3d] text-sm font-bold text-[#b0b0b0] placeholder-[#b0b0b0] pl-8 pr-12 py-2 rounded focus:outline-none tracking-tight"
              placeholder='Search: "shipping"'
            />
            <span className="search-shortcut absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#b0b0b0] font-bold">
              ⌘+K
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="header-right flex items-center gap-4 pr-6">
          <button className="header-btn flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-300 transition-colors h-12 px-4 rounded-md bg-transparent">
            <Headset size={20} />
            <span>Customer messages</span>
          </button>

          <button className="header-btn relative hover:text-gray-300 transition-colors px-4">
            <Bell size={22} />
            {/* <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span> */}
          </button>

          <button className="avatar header-btn h-7 w-7 rounded-full bg-[#6b7280] flex items-center justify-center text-xs font-semibold hover:opacity-80 transition-opacity">
            G
          </button>
        </div>
      </nav>
    </header>
  );
}
