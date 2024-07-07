"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { getAllUsers } from "@/api";
import { registerUser } from "@/api";
import { v4 as uuidv4 } from "uuid";

interface ModeProps {
    mode: string;
}

export const Form = (mode:ModeProps) => {
    const isExistingUser = async () => {
        const users = await getAllUsers();
        const user = users.find((user: { name: string; pass: string; }) => user.name === name);
        return user;
    }
    const router = useRouter();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || !password) {
            return alert("Please fill in the form");
        }
        const isExist = await isExistingUser();
        if (mode.mode === "Register") {
            if (isExist) {
                return alert("User already exist");
            }
            registerUser({id:uuidv4(),name:name,pass:password})
            return alert("User registered");
        }
        if (mode.mode === "Login") {
            if (isExist) {
                if(isExist.pass == password){
                    router.push(`/main/${isExist.id}`);
                    return;
                }
            }
            return alert("Failed to login");
        }
    }
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password} />
            <button type="submit" className="sbm-btn" onClick={handleSubmit}>Submit</button>
        </form>
    );
}