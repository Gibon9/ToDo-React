import React from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/TodoListItem/TodoListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 488px;
  height: 646px;
  background-color: #efefd0;
  border-radius: 25px;
`;

const TodoList = () => (
  <Wrapper>
    <h1>ToDo List</h1>
    <ul>
      {todos.map((data) => (
        <TodoListItem data={data} />
      ))}
    </ul>
  </Wrapper>
);

export default TodoList;
