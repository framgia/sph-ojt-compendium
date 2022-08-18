import React from 'react';
import Register from './Register/Register';
import RegisterSuccess from './RegisterSuccess/RegisterSuccess';
import Home from './pages/Home';
import Login from './Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateReport from './pages/Comments/Create/CommentCreate';


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
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
