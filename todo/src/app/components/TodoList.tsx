import React from "react"
import { Task } from "@/types"
import Todo from "./todo"

interface TodoListProps {
    todos: Task[];
}


const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}
export default TodoList