import React, { useState } from 'react';
import { todos as todoData } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (todoData) {
        resolve([...todoData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const TodoList = () => {
  const [data, setData] = useState(todos);

  const deleteTodo = (id) => {
    const filteredUsers = data.filter((todo) => todo.id !== id);
    setData(filteredUsers);
  };

  return (
    <Wrapper>
      <StyledHeader>ToDo List</StyledHeader>
      <StyledList>
        {console.log(data)}
        {todos.map((data) => (
          <TodoListItem deleteTodo={deleteTodo} key={data.id} data={data} />
        ))}
      </StyledList>
      <AddButton />
    </Wrapper>
  );
};

export default TodoList;
