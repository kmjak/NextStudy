"use client"
import Image from "next/image";
import { useState } from "react";
import { Form } from "./components/form";

export default function Home() {
  const [isRegister,setIsRegister] = useState(true);
  const changeMode = () => {
    if(isRegister){
      setIsRegister(false);
    }else{
      setIsRegister(true)
    }
  }
  return (
    <main>
      <h1>Next.js login system</h1>
      {isRegister ? (<h3>Register</h3>) : (<h3>Login</h3>)}
      <Form isRegister={isRegister} />
      {isRegister ? (<button onClick={changeMode} className="register-btn">Login</button>) : (<button onClick={changeMode} className="login-btn">Register</button>)}
    </main>
  );
}
