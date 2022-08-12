import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterSuccess from './pages/RegisterSuccess';
import Home from './pages/Home';
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
            <Route
              path="/register-success"
              exact
              element={<RegisterSuccess />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
