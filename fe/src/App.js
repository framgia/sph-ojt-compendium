import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterSuccess from './pages/RegisterSuccess';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateReport from './pages/Comments/Create/CommentCreate';
import UserProfile from './pages/userprofile/pages/UserProfile';
import InternProfile from './pages/InternProfile/pages/InternProfile';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/User-Profile" exact element={<UserProfile />}></Route>
          <Route
            path="/Intern-Profile"
            exact
            element={<InternProfile />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
