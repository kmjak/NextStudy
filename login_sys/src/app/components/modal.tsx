"use client";

import { useState } from "react";
import { Form } from "./form";

export const Modal = () => {
  const [mode,setMode] = useState<string>("login");
  const changeMode = () => {
    setMode(mode == "login" ? "signup" : "login")
  }
  return (
    <>
      <h3>{mode}</h3>
      <Form mode={mode} />
      <button onClick={changeMode}>{mode == "login" ? "signup" : "login"}</button>
    </>
  )
}