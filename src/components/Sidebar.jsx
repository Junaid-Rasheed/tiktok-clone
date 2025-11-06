import React, { useState } from 'react'
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
  DollarSign
} from 'lucide-react'
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home')

  const menuSections = [
    {
      items: [
        { name: 'Home', icon: Home, size: 14, path: "/" }
      ]
    },
    {
      items: [
        { name: 'Orders', icon: ShoppingBag, size: 14, path: "/order" },
        { name: 'Products', icon: Package, size: 14 },
        { name: 'Fulfilled by TikTok', icon: Truck, size: 14 },
      ]
    },
    {
      items: [
        { name: 'Marketing', icon: TrendingUp, size: 14 },
        { name: 'Affiliate', icon: Users, size: 14 },
        { name: 'LIVE & video', icon: Video, size: 14 },
        { name: 'Growth', icon: Sprout, size: 14 },
        { name: 'Apps & partners', icon: Puzzle, size: 14 },
      ]
    },
    {
      items: [
        { name: 'Analytics', icon: BarChart3, size: 14 },
        { name: 'Account health', icon: HeartPulse, size: 14 },
        { name: 'Finances', icon: DollarSign, size: 14 },
      ]
    }
  ]

  return (
    <aside className="sidebar fixed left-0 top-[60px] w-[220px] h-[calc(100vh-60px)] bg-white border-r border-[#efefef] overflow-hidden z-50">
      <nav className="p-4 pl-2 pr-[2px]">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section flex flex-col gap-0.5">

            {section.items.map((item) => {
              const IconComponent = item.icon

              const ItemInner = (
                <div
                  className={`w-full flex items-center px-2 py-2 rounded-sm cursor-pointer transition-colors text-sm font-medium
                    ${activeItem === item.name
                      ? 'bg-[#ebebeb] text-[#089994]'
                      : 'text-black hover:bg-[#ebebeb]'
                    }`}
                >
                  <span className="w-5 mr-3 flex items-center justify-center">
                    <IconComponent
                      size={14}
                      strokeWidth={2}
                      className={
                        activeItem === item.name ? 'text-[#089994]' : 'text-black'
                      }
                    />
                  </span>
                  <span>{item.name}</span>
                </div>
              )

              return item.path ? (
                // ✅ For Home + Orders → use Link
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActiveItem(item.name)}
                >
                  {ItemInner}
                </Link>
              ) : (
                // ✅ All other items → normal button
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                >
                  {ItemInner}
                </button>
              )
            })}

            {sectionIndex < menuSections.length - 1 && (
              <div className="nav-separator my-2 border-t border-gray-200"></div>
            )}

          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
