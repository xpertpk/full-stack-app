// src/types.ts

// User type
export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    user_type: string | null;
    gender: string | null;
    photo: string | null;
    mobile: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    postcode: string | null;
    country: string | null;
    created_at: string;
  }
  
  // Auth Context type
  export interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
  }
  
  // Axios Response type
  export interface LoginResponse {
    token: string;
    user: User;
  }
  