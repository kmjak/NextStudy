import React from "react";
import {Task} from "@/types"

interface TodoProps{
    todo:Task;
}

const Todo = function({todo}:TodoProps) {
    return (
        <li key={todo.id} className="flex">
        <p>{todo.content}</p>
        <div>
            <button>編集</button>
            <button>削除</button>
        </div>
    </li>
    );
}
export default Todo;