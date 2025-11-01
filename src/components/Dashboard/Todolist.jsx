// src/components/Todo.jsx
import React from "react";

const Todolist = () => {
  return (
    <section className="mb-6">
         <h2 className="text-lg font-semibold text-gray-900 mb-2">To-do list</h2>
          <p className="text-[#0000008c] text-xs mb-4 font-medium tracking-tight">These are the key daily tasks for your shop.</p>
      <div className="bg-white rounded-lg shadow-sm p-6">
        

    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="text-center">
              <div className="h-4 bg-[#f5f5f5] rounded animate-pulse mb-2"></div>
              <div className="h-6 bg-[#f5f5f5] rounded animate-pulse mb-1"></div>
              <div className="h-3 bg-[#f5f5f5] rounded animate-pulse"></div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Todolist;
