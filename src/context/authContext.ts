import { createContext } from "react";

export type User = {
  name: string;
  email: string;
};

export type Account = {
  name: string;
  email: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  register: (name: string, email: string, password: string) => string;
  login: (email: string, password: string) => string;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
