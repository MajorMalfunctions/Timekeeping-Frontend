import React, { useState } from 'react';
import './styles/App.css';

import {
  Browser as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import ForgotPassword from './pages/Forgot/ForgotPassword';
import ChangePassword from './pages/Forgot/ChangePassword';

import Timein from './components/Timein/Timein';
import Timeout from './components/Timeout/Timeout';

import Navbar from './components/Navbar/Navbar';


export default function App() {
  // const [token, setToken] = useState();
  
  //  if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        <div>
            <Navbar />
        
            <Route path="/home" element={<Home />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/timein" element={<Timein />} />
            <Route path="/timeout" element={<Timeout />} />
            <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </div>          

        </Routes>
    </div>
  );
}

// export default App;
