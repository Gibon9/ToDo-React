import React from 'react';

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
 return (
   <>
  <TodoContext.Provider
  value={{ todos: [], deleteTodo: () => {}, addTodo: () => {} }}
><TodoContext>
  </>
 ) 
};
