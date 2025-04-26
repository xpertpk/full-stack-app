// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute"; // we'll talk about this too
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Dashboard from "./pages/Dashboard";

// Function to check if the user is logged in
const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Redirect to Dashboard if logged in, otherwise to Login page */}
          <Route path="/" element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          {/* Add more routes if needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
