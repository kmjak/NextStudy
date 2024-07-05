import Image from "next/image";
import AddTask from "./components/AddTask"
import TodoList from "./components/TodoList"
import { getALlData } from "@/api";

export default async function Home() {
  const todos = await getALlData();
  return (
    <main>
      <h1>Hello Next To Do</h1>
      <div>
        <div>
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
