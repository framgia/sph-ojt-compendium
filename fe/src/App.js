import React from 'react';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess';
import CreateReport from './pages/DailyReport/CreateDailyReport/CreateDailyReport';
import UpdateReport from './pages/DailyReport/UpdateDailyReport/UpdateDailyReport';
import UserProfile from './pages/userprofile/pages/UserProfile';
import InternProfile from './pages/InternProfile/pages/InternProfile';
import InternHistory from './pages/InternProfile/InternHistory/InternHistory';
import InternInfo from './pages/InternProfile/InternInfo/InternInfo';
import EditProfile from './pages/EditProfile/EditProfile';
import Dashboard from './pages/Dashboard/Dashboard';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/register-success" exact element={<RegisterSuccess />} />
        <Route path="/dashboard/:nav" exact element={<Dashboard />} />
        <Route path="/reports/create" exact element={<CreateReport />} />
        <Route path="/reports/update" exact element={<UpdateReport />} />
        <Route path="/profile" exact element={<UserProfile />} />
        <Route path="/profile/id" exact element={<InternProfile />} />
        <Route path="/profile/id/history" exact element={<InternHistory />} />
        <Route path="/profile/id/info" exact element={<InternInfo />} />
        <Route path="/profile/edit" exact element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
