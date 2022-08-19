import React from 'react';


import UserProfile from './pages/userprofile/pages/UserProfile';
import InternProfile from './pages/InternProfile/pages/InternProfile';
import EditProfile from './pages/EditProfile/EditProfile';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" exact element={<UserProfile />}></Route>
        <Route path="/profile/id" exact element={<InternProfile />}></Route>
        <Route path="/edit/profile" exact element={<EditProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
