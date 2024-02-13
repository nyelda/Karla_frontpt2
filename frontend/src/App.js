import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Arm from './components/Arm';
import Shoulder from './components/Shoulder';
import Upper from './components/Upper';
import Lower from './components/Lower';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<User />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/arm" element={<Arm />} />
            <Route path="/shoulder" element={<Shoulder/>} />
            <Route path="/upper" element={<Upper />} />
            <Route path="/lower" element={<Lower />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;