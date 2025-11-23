import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import ManageOrder from "./pages/ManageOrder";

import "./index.css";
import ManageReturn from "./pages/ManageReturn";
import { AnalyticVideo } from "./pages/AnalyticVideo";
import Performance from "./pages/Perfomance";
import SampleRequest from "./pages/SampleRequest";
import TargetCollab from "./pages/TargetCollab";

function App() {
  return (
    <Router>
      <div className="static-home-page bg-[#f5f5f5] relative">
        <Header />
        <Sidebar />

        {/* MAIN LAYOUT */}
        <div className="flex min-w-0">
          {/* Sidebar spacing */}
          <div className="w-[220px] flex-shrink-0"></div>

          {/* Main content */}
          {/* <div className="flex-1 min-w-0 mt-[58px] p-6 bg-[url('/background-wide.svg')] bg-auto bg-no-repeat"> */}
          <div className="flex-1 min-w-0 mt-[58px] p-6 ">
            {/* ROUTES */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<ManageOrder />} />
              <Route path="/orders/returns" element={<ManageReturn />} />
              <Route
                path="/perfomance/analyticvideo"
                element={<AnalyticVideo />}
              />
              <Route path="/collaboration" element={<TargetCollab />} />
              <Route path="/perfomance" element={<Performance />} />
              <Route path="/samplerequest" element={<SampleRequest />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
