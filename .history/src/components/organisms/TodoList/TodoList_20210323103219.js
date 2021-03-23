import React from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 488px;
  height: 646px;
  background-color: #efefd0;
  border-radius: 25px;
  box-shadow: 5px 5px 5px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  padding: 35px;
`;

const StyledHeader = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
`;

const TodoList = () => (
  <Wrapper>
    <StyledHeader>ToDo List</StyledHeader>
    <ul>
      {todos.map((data) => (
        <TodoListItem data={data} />
      ))}
    </ul>
  </Wrapper>
);

export default TodoList;
