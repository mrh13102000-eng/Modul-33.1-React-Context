import { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "Belajar React", user: "Budi" },
    { id: 2, title: "Belajar Context", user: "Siti" },
    { id: 3, title: "Belajar Router", user: "Budi" },
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <TodoContext.Provider value={{ todos, selectedTodo, setSelectedTodo }}>
      {children}
    </TodoContext.Provider>
  );
}