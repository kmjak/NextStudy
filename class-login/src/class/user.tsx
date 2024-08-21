"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

class User {
  private defaultName = "user";
  private defaultPass = "pass";
  private name = "";
  private pass = "";

  setName(name: string) {
    this.name = name;
  }

  setPass(pass: string) {
    this.pass = pass;
  }

  login() {
    return this.defaultName === this.name && this.defaultPass === this.pass;
  }
}

const UserContext = createContext<User | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user] = useState(new User());

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};