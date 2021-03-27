import React from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

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
