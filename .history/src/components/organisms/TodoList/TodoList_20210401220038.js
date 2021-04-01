import React, { useState } from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

const TodoList = () => {
  const [data, setData] = useState(todos);

  const deleteTodo = (id) => {
    const filteredTodos = data.filter((todo) => todo.id !== id);
    return setData(filteredTodos);
  };

  return (
    <Wrapper>
      <StyledHeader>ToDo List</StyledHeader>
      <StyledList>
        {todos.map((data) => (
          <TodoListItem deleteTodo={deleteTodo} data={data} />
        ))}
      </StyledList>
      <AddButton />
    </Wrapper>
  );
};

export default TodoList;
