"use client"
import { useState } from "react";
import { Form } from "./components/form";

export default function Home() {
  const [mode,setMode] = useState<string>("login");
  const changeMode = () => {
    setMode(mode == "login" ? "signup" : "login")
  }
  return (
    <main>
      <h1>Next.js login system</h1>
      <h3>{mode}</h3>
      <Form mode={mode} />
      <button onClick={changeMode}>{mode == "login" ? "signup" : "login"}</button>
    </main>
  );
}
