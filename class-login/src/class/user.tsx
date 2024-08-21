"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

class User {
  private defaultName = "user";
  private defaultPass = "pass";
  private name = "";
  private pass = "";
  private mode = "login";

  setName(name: string) {
    this.name = name;
  }

  setPass(pass: string) {
    this.pass = pass;
  }

  changeMode() {
    this.mode = this.mode === "login" ? "signup" : "login";
  }

  login() {
    if(this.defaultName === this.name && this.defaultPass === this.pass){
      if(this.mode === "login"){
        return "login";
      }else{
        return "signup";
      }
    }else{
      return "error";
    }
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