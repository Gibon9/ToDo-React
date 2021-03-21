import React from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/TodoListItem/TodoListItem';
import styled from 'styled-components';

const TodoList = () => (
  <div>
    <h1>ToDo List</h1>
    <ul>
      {todos.map((data) => (
        <TodoListItem data={data} />
      ))}
    </ul>
  </div>
);

export default TodoList;
