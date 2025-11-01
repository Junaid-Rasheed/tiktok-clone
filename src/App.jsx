import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import './index.css' // Import your CSS file

function App() {
  return (
    <div className="static-home-page min-w-[1000px] bg-[#f5f5f5] relative">
      <Header />
      <Sidebar />
      {/* Main content area */}
      <div className="flex">
        {/* Spacer for sidebar */}
        <div className="w-[220px] flex-shrink-0"></div>
        {/* Main content with background image */}
        <div 
          className="flex-1 mt-[58px]  p-6 bg-[url('/background-wide.svg')] bg-auto bg-no-repeat"
        >
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App