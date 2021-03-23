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
  padding-top: 10px;
  margin: 0 10px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  border-bottom: solid 3px ${({ theme }) => theme.colors.lighBlue};
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 5px 0 0 0;
  padding: 0;
`;

const TodoList = () => (
  <Wrapper>
    <StyledHeader>ToDo List</StyledHeader>
    <StyledList>
      {todos.map((data) => (
        <TodoListItem data={data} />
      ))}
    </StyledList>
  </Wrapper>
);

export default TodoList;
