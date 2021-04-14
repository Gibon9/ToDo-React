import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {}, []);

  const addTodo = (value) => {
    const newTodo = {
      todo: value.toString(),
      id: Math.random().toString(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, deleteTodo, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
