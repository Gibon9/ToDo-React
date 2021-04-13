import React from 'react';

const TodoProvider = () => {};

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});
