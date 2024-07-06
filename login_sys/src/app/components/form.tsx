"use client"
import React, { FormEvent, useState } from "react";
import { register } from "module";
import { regisger } from "@/api";
import {v4 as uuidv4} from "uuid"

export const Form = ()=>{
    const [NAME,setName] = useState("");
    const [PASS,setPass] = useState("");
    const submitBtn = async (e:FormEvent) => {
        await regisger({id:uuidv4(),name:NAME,pass:PASS})
    }
    return(
        <div>
            <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setName(e.target.value)}/>
            <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setPass(e.target.value)}/>
            <button onClick={submitBtn}>submit</button>
        </div>
    )
}