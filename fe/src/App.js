import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './pages/userprofile/pages/UserProfile';
import InternProfile from './pages/InternProfile/pages/InternProfile';
import EditProfile from './pages/EditProfile/EditProfile';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/profile" exact element={<UserProfile />}></Route>
          <Route path="/profile/id" exact element={<InternProfile />}></Route>
          <Route path="/edit/profile" exact element={<EditProfile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
