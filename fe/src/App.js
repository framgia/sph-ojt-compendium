import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterSuccess from './pages/RegisterSuccess';
import Home from './pages/Home';
import UserProfile from './pages/userprofile/pages/UserProfile';
import InternProfile from '.pages/InternProfile/pages/InternProfile';
import CreateReport from './pages/Comments/Create/CommentCreate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
            <Route path="/profile" exact elemt={<UserProfile />}></Route>
            <Route path="/profile/id" exact elemt={<InternProfile />}></Route>
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
