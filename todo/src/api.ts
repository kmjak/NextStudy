import { cache } from "react";
import { Task } from "./types";
export const getALlData = async () :Promise<Task[]> => {
    const res = await fetch("http://localhost:3001/tasks",{cache:"no-store",})
    const todos = res.json();
    return todos;
}

export const add = async (todo:Task):Promise<Task> => {
    const res = await fetch("http://localhost:3001/tasks",{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(todo),
    })
    const add_info = res.json();
    return add_info;
}

export const editTask = async (id:string, newContent:string)=>{
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({content:newContent}),
    });
    const updatedTodo = res.json();
    return updatedTodo;
}

export const del = async (id:string) =>{
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
    })
    const deleteTask = res.json();
}