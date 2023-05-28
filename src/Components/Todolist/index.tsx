import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem, { Todo } from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
