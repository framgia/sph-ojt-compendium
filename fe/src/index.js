import React from "react";
import ReactDOM from "react-dom/client";
import UserProfile from "./pages/Profile/UserProfile";
import CreateReport from "./pages/Comments/Create/CommentCreate";
import ListDailyReport from "./pages/Comments/List/ListDailyReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/reports/create" element={<CreateReport />} />
        <Route path="/dailyreport" element={<ListDailyReport />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
