"use client"
import React, { FormEvent, useState } from "react";
import { regisger } from "@/api";
import { getAllUsers } from "@/api";
import {v4 as uuidv4} from "uuid"
import { useRouter } from 'next/navigation';

interface FormProps {
    mode:string
}

export const Form = ({mode}:FormProps)=>{
    const [NAME,setName] = useState("");
    const [PASS,setPass] = useState("");
    const router = useRouter();
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if(!NAME || !PASS) {
            return alert("Please fill in the form")
        }
        const users = await getAllUsers();
        const isExist = users.find((user)=> user.name === NAME);
        if(mode == "signup") {
            if(isExist){
                return alert("User already exist")
            }
            await regisger({id:uuidv4(),name:NAME,pass:PASS});
            setName("");
            setPass("");
            return alert("User registered")
        }
        if(mode == "login") {
            if(!isExist){
                return alert("Failed to login")
            }
            if(isExist.pass !== PASS){
                return alert("Failed to login")
            }
            router.push("/main");
        }
    }
    return(
        <div>
            <p><input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} value={NAME} placeholder="Name"/></p>
            <p><input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPass(e.target.value)} value={PASS} placeholder="Pass"/></p>
            <p><button onClick={handleSubmit}>submit</button></p>
        </div>
    )
}