import React from "react";
import { useTodo } from "../contexts";
import { useState } from "react";

function TodoForm() {
  const [todo, setTodos] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodos("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write TODO..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button
        type="submit"
        className="rounded--lg px-3 py-1 bg-green-600 txt-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
