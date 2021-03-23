import React from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import styled from 'styled-components';
import AddButton from 'components/atoms/AddButton/AddButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 488px;
  height: 646px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 25px;
  box-shadow: 5px 5px 5px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  padding: 35px;
`;

const StyledHeader = styled.div`
  padding-top: 10px;
  margin: 0 10px 30px;
  width: 90%;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  border-bottom: solid 3px ${({ theme }) => theme.colors.lighBlue};
`;

const StyledList = styled.ul`
  display:flex
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TodoList = () => (
  <Wrapper>
    <StyledHeader>ToDo List</StyledHeader>
    <StyledList>
      {todos.map((data) => (
        <TodoListItem data={data} />
      ))}
    </StyledList>
    <AddButton />
  </Wrapper>
);

export default TodoList;
