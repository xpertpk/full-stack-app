// src/components/Profile.tsx
import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import api from "../api";

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await api.post("/profile");
      setProfileData(response.data);
    };
    fetchProfile();
  }, [user]);

  return (
    <div className="container">
      {profileData && (
        <div>
          <h1>{profileData.firstname} {profileData.lastname}</h1>
          <p>Email: {profileData.email}</p>
          {/* Display other profile information */}
        </div>
      )}
    </div>
  );
};

export default Profile;
