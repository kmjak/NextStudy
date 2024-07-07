"use client";
import { useState } from "react";
import {Form } from "./component/forms";

export default function Home() {
  const [mode, setMode] = useState("Register");
  const changeMode = async () => {
    if (mode === "Register") {
      setMode("Login");
    } else {
      setMode("Register");
    }
  }
  return (
    <main>
      <h1>Chat App</h1>
      {mode === "Register" ? (<h3>Register</h3>) : (<h3>Login</h3>)}
      <Form mode={mode} />
      <button onClick={changeMode}>Change Mode</button>
    </main>
  );
}
