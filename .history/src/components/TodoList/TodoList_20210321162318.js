import React from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/TodoListItem/TodoListItem';

const TodoList = () => (
  <div>
    <h1>ToDo List</h1>
    <ul>
      {todos.map((todo) => (
        <TodoListItem data={todo} />
      ))}
    </ul>
  </div>
);

export default TodoList;
