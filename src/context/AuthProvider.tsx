import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./authContext";
import type { User, Account } from "./authContext";

function loadData<T>(key: string, defaultValue: T): T {
  try {
    const saved = localStorage.getItem(key);
    if (saved === null) {
      return defaultValue;
    }
    return JSON.parse(saved);
  } catch {
    return defaultValue;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>(() =>
    loadData<Account[]>("accounts", []),
  );
  const [user, setUser] = useState<User | null>(() =>
    loadData<User | null>("user", null),
  );

  function register(name: string, email: string, password: string) {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    for (const acc of accounts) {
      if (acc.email === cleanEmail) {
        return "This email is already registered.";
      }
    }

    const newAccount = { name: cleanName, email: cleanEmail, password };
    const newAccounts = [...accounts, newAccount];
    const newUser = { name: cleanName, email: cleanEmail };

    setAccounts(newAccounts);
    setUser(newUser);
    localStorage.setItem("accounts", JSON.stringify(newAccounts));
    localStorage.setItem("user", JSON.stringify(newUser));
    return "";
  }

  function login(email: string, password: string) {
    const cleanEmail = email.trim().toLowerCase();

    let found: Account | null = null;
    for (const acc of accounts) {
      if (acc.email === cleanEmail) {
        found = acc;
      }
    }

    if (found === null) {
      return "No account found with this email.";
    }
    if (found.password !== password) {
      return "Incorrect password.";
    }

    const loggedUser = { name: found.name, email: found.email };
    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));
    return "";
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
