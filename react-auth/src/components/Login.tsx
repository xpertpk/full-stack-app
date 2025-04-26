// src/components/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- useNavigate instead of useHistory
import { useAuth } from "./AuthProvider";
import api from "../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate(); // <-- useNavigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      login(response.data.token, response.data.user);
      navigate("/"); // <-- use navigate instead of history.push
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded mt-4"
          >
            Login
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 font-semibold">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
