import React, { useState } from 'react';
import { todos as todosData } from 'data/todos';

export const TodoContext = React.createContext({
  todos: [],
  deleteTodo: () => {},
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosData);

  const addTodo = (value) => {
    e.preventDefault();
    const newTodo = {
      todo: value,
      id: Math.random(),
    };

    setTodos([...todos, newTodo]);

    setFormValue('');
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
