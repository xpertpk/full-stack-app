import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";  // Import Navigate for redirection
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Function to check if the user is logged in
const isLoggedIn = () => {
  // Check for a token in localStorage (or any other way you're tracking login status)
  return localStorage.getItem("token") !== null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect to Dashboard if logged in, otherwise to Login page */}
        <Route path="/" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
        
        {/* Signup and Login routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
