import React, { useState } from 'react';

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
  const [todos, setTodo] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      todo: formValue,
      id: Math.random(),
    };

    setTodo([...todos, newTodo]);

    setFormValue('');
  };

  return (
    <TodoContext.Provider value={{ todos: [], deleteTodo: () => {}, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
