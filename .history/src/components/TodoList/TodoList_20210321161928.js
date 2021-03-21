import React from 'react';
import { todos } from 'data/todos';

const TodoList = () => (
  <div>
    <h1>ToDo List</h1>
    <ul>
      {todos.map((todo) => (

      ))}
    </ul>
  </div>
);

export default TodoList;
