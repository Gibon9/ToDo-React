import React from 'react';

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
  const addTodo = (e) => {
    e.preventDefault();
  };

  return (
    <TodoContext.Provider value={{ todos: [], deleteTodo: () => {}, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
