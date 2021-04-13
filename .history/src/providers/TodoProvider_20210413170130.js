import React from 'react';

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      todo: formValue,
      id: Math.random(),
    };
  };

  return (
    <TodoContext.Provider value={{ todos: [], deleteTodo: () => {}, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
