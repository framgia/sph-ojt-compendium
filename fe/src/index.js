import React from "react";
import ReactDOM from "react-dom/client";
import UserProfile from "./pages/Profile/UserProfile";
import CreateReport from "./pages/Comments/Create/CommentCreate";
import EditReport from "./pages/EditDailyReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/reports/create" element={<CreateReport />} />
        <Route path="/report/edit" element={<EditReport />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
