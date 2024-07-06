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
      <Form />
      {isRegister ? (<button onClick={changeMode}>Login</button>) : (<button onClick={changeMode}>Register</button>)}
    </main>
  );
}
