import React from 'react';

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
};

export default TodoProvider;
