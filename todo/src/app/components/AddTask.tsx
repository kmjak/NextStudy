"use client";
import React, { ChangeEvent, FormEvent, useState } from "react"
import { add } from "@/api";
import {v4 as uuidv4} from "uuid"

const AddTask = ()=>{
    const [taskName,setTaskName] = useState("");
    const handleSubmit = async (e:FormEvent) =>{
        await add({id:uuidv4(),content:taskName});
        setTaskName("");
    }
    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value)} value={taskName}/>
            <button>Add Task</button>
        </form>
    );
}
export default AddTask