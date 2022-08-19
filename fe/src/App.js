import React from 'react';
import Register from './pages/Register/Register';
import RegisterSuccess from './pages/RegisterSuccess/RegisterSuccess';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateReport from './pages/Comments/Create/CommentCreate';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/Profile/UserProfile';
import UpdateDailyReport from './pages/DailyReport/UpdateDailyReport/UpdateDailyReport';
import CreateDailyReport from './pages/DailyReport/CreateDailyReport/CreateDailyReport';

const App = () => {
  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/reports/create" element={<CreateDailyReport />} />
            <Route
              path="/register-success"
              exact
              element={<RegisterSuccess />}
            ></Route>
            <Route
              path="/reports/create"
              exact
              element={<CreateReport />}
            ></Route>
             <Route
              path="/dashboard/:nav"
              exact
              element={<Dashboard />}
            ></Route>
              <Route
              path="/reports/edit"
              exact
              element={<UpdateDailyReport />}
            ></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
};

export default App;
