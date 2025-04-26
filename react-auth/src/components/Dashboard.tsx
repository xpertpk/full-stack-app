import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the type for the user object
interface User {
  firstname: string;
  email: string;
  // Add any other properties the user might have
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null); // State type is either User or null

  useEffect(() => {
    // Retrieve the user from localStorage and handle errors
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser: User = JSON.parse(userData); // Type the parsed user data as User
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear the token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to the login page
    navigate("/login");
  };

  if (!user) {
    //return <div>Loading...</div>; // Or you can redirect to login here if user is not found
    return <button
    className="mt-4 w-full p-2 bg-red-500 text-white rounded"
    onClick={handleLogout}
  >
    Logout
  </button>; // Or you can redirect to login here if user is not found
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Welcome, {user.firstname}!</h2>
        <p className="text-center">Email: {user.email}</p>
        <button
          className="mt-4 w-full p-2 bg-red-500 text-white rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
