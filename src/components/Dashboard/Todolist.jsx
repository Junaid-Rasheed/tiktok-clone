// src/components/Todo.jsx
import React from "react";

const Todolist = () => {
  const todoItems = [
    {
      title: "Orders to ship",
      count: 0,
      status: "All caught up!",
    },
    {
      title: "Pending returns",
      count: 0,
      status: "All caught up!",
    },
    {
      title: "Unread customer messages",
      count: 0,
      status: "All caught up!",
    },
    {
      title: "Low stock",
      count: 0,
      status: "All caught up!",
    },
    {
      title: "Address negative reviews",
      count: 0,
      status: "All caught up!",
    }
  ];

  return (
    <section className="my-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">To-do list</h2>
      <p className="text-gray-500 text-xs mb-4 font-medium tracking-tight">
        These are the key daily tasks for your shop.
      </p>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex gap-6 overflow-x-auto">
          {todoItems.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[150px] bg-white rounded-lg cursor-pointer"
            >
              {/* Header with title and arrow - Fixed height */}
              <div className="flex items-start justify-between mb-3 min-h-[40px]">
                <span className="text-[14px] font-normal leading-[20px] text-[#0000008c] line-clamp-2">
                  {item.title}
                </span>
                <span className="text-gray-400 ml-2 flex-shrink-0">›</span>
              </div>
              
              {/* Count number */}
              <div className="text-2xl font-bold text-gray-900 mb-2 h-8 flex items-center">
                {item.count}
              </div>
              
              {/* Status text */}
              <div className="text-[12px] font-medium leading-[18px] text-[#00000059] overflow-hidden text-ellipsis whitespace-nowrap">
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Todolist;