"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'; // import useRouter from next/navigation
import { Task } from "@/types";
import { editTask } from "@/api";
import { del } from "@/api";

interface TodoProps {
    todo: Task;
}

const Todo = function ({ todo }: TodoProps) {
    const ref = useRef<HTMLInputElement>(null)
    const [isEditting, setIsEditting] = useState(false);
    const [newTask, setNewTask] = useState(todo.content);
    const router = useRouter(); // useRouterフックを使用

    useEffect(()=>{
        if(isEditting){
            ref.current?.focus();
        }
    },[isEditting])

    const handleEdit = () => {
        setIsEditting(true);
    };

    const handleSave = async () => {
        await editTask(todo.id, newTask);
        setIsEditting(false);
        router.refresh();
    };

    const handleDelete = async () =>{
        await del(todo.id);
        router.refresh();
    }

    return (
        <li key={todo.id} className="flex">
            {isEditting ? (
                <input
                    ref={ref}
                    type="text"
                    value={newTask}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
                />
            ) : (
                <p>{todo.content}</p>
            )}

            <div>
                {isEditting ? (
                    <button onClick={handleSave}>保存</button>
                ) : (
                    <button onClick={handleEdit}>編集</button>
                )}
                <button onClick={handleDelete}>削除</button>
            </div>
        </li>
    );
};

export default Todo;
