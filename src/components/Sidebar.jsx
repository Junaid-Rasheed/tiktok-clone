import React, { useState } from "react";
import {
  Home,
  ShoppingBag,
  Package,
  Truck,
  TrendingUp,
  Users,
  Video,
  Sprout,
  Puzzle,
  BarChart3,
  HeartPulse,
  DollarSign,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState("Home");
  const [expandedItems, setExpandedItems] = useState({});

  const toggleDropdown = (itemName) => {
  setExpandedItems((prev) => {
    // if clicking the same dropdown → toggle normally
    if (prev[itemName]) {
      return { [itemName]: false }
    }

    // ✅ close all others, open only the clicked one
    return { [itemName]: true }
  })
}


  const menuSections = [
    {
      items: [{ name: "Homepage", icon: Home, size: 14, path: "/" }],
    },
    {
      items: [
        {
          name: "Orders",
          icon: ShoppingBag,
          size: 14,
          path: "/order",
          dropdownItems: [
            { name: "Manage orders", path: "/order" },
            { name: "Manage returns", path: "/orders/returns" },
          ],
        },
        {
          name: "Products",
          icon: Package,
          size: 14,
          dropdownItems: [
            { name: "All products", path: "/products/all" },
            { name: "Collections", path: "/products/collections" },
          ],
        },
        {
          name: "Fulfilled by TikTok",
          icon: Truck,
          size: 14,
          dropdownItems: [
            { name: "Shipping settings", path: "/fulfillment/shipping" },
            { name: "Fulfilment Settings", path: "/fulfillment/settings" },
          ],
        },
      ],
    },
    {
      items: [
        {
          name: "Marketing",
          icon: TrendingUp,
          size: 14,
          dropdownItems: [
            { name: "Campaigns", path: "/marketing/campaigns" },
            { name: "Discounts", path: "/marketing/discounts" },
          ],
        },
        { name: "Affiliate", icon: Users, size: 14 },
        { name: "LIVE & video", icon: Video, size: 14 },
        { name: "Growth", icon: Sprout, size: 14 },
        { name: "Apps & partners", icon: Puzzle, size: 14 },
      ],
    },
    {
      items: [
        { name: "Analytics", icon: BarChart3, size: 14 },
        { name: "Account health", icon: HeartPulse, size: 14 },
        { name: "Finances", icon: DollarSign, size: 14 },
      ],
    },
  ];

  return (
    <aside className="sidebar fixed left-0 top-[60px] w-[220px] h-[calc(100vh-60px)] bg-white border-r border-[#efefef] overflow-y-auto z-50">
      <nav className="p-4 pl-2 pr-[2px]">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section flex flex-col gap-0.5">
            {section.items.map((item) => {
              const IconComponent = item.icon;
              const hasDropdown =
                item.dropdownItems && item.dropdownItems.length > 0;
              const isExpanded = expandedItems[item.name];

              const ItemInner = (
                <div
                  className={`w-full flex items-center px-2 py-2 rounded-sm cursor-pointer transition-colors text-sm font-medium
                    ${
                      activeItem === item.name
                        ? "bg-[#ebebeb] text-[#089994]"
                        : "text-black hover:bg-[#ebebeb]"
                    }`}
                >
                  <span className="w-5 mr-3 flex items-center justify-center">
                    <IconComponent
                      size={14}
                      strokeWidth={2}
                      className={
                        activeItem === item.name
                          ? "text-[#089994]"
                          : "text-black"
                      }
                    />
                  </span>
                  <span className="flex-1">{item.name}</span>

                  {/* Dropdown arrow */}
                  {/* {hasDropdown && (
                    <span className="ml-2">
                      {isExpanded ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}
                    </span>
                  )} */}
                </div>
              );

              const handleItemClick = () => {
                if (hasDropdown) {
                  toggleDropdown(item.name);

                  const firstItem = item.dropdownItems[0];
                  if (firstItem) {
                    setActiveItem(firstItem.name);
                    navigate(firstItem.path); // ✅ auto-redirect
                  }
                } else {
                  setActiveItem(item.name);
                }
              };

              return (
                <div key={item.name} className="w-full">
                  {item.path && !hasDropdown ? (
                    // ✅ Regular link items without dropdown
                    <Link
                      to={item.path}
                      onClick={() => setActiveItem(item.name)}
                    >
                      {ItemInner}
                    </Link>
                  ) : (
                    // ✅ Dropdown items or items without path
                    <button
                      onClick={handleItemClick}
                      className="w-full text-left"
                    >
                      {ItemInner}
                    </button>
                  )}

                  {/* Dropdown content */}
                  {hasDropdown && isExpanded && (
                    <div className="ml-6 mt-1 mb-2 flex flex-col gap-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          onClick={() => setActiveItem(dropdownItem.name)}
                          className={`px-2 py-1.5 rounded-sm text-sm transition-colors
                            ${
                              activeItem === dropdownItem.name
                                ? "bg-[#ebebeb] text-[#089994] font-medium"
                                : "text-gray-700 hover:bg-[#f5f5f5]"
                            }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {sectionIndex < menuSections.length - 1 && (
              <div className="nav-separator my-2 border-t border-gray-200"></div>
            )}
          </div>
        ))}

        {/* Academy section at the bottom */}
        <div className="nav-section flex flex-col gap-0.5 mt-4">
          <button
            onClick={() => setActiveItem("Academy")}
            className={`w-full flex items-center px-2 py-2 rounded-sm cursor-pointer transition-colors text-sm font-medium
              ${
                activeItem === "Academy"
                  ? "bg-[#ebebeb] text-[#089994]"
                  : "text-black hover:bg-[#ebebeb]"
              }`}
          >
            <span className="flex-1 text-left">Academy</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
