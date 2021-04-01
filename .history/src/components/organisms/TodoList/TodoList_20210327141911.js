import React, { useState } from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

const TodoList = () => {
  const [data, setData] = useState([]);

  const deleteTodo = () => {
    const filteredTodos = 
  }

  return (
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
};

export default TodoList;
