// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AboutUs from "./components/Aboutus";
import Appointment from "./components/Appointment"; // ✅ Import this
import DoctorDashboard from "./components/DoctorDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/appointment" element={<Appointment />} />
       <Route path="/doctordashboard" element={<DoctorDashboard/>} />
    </Routes>
  );
}

export default App;
