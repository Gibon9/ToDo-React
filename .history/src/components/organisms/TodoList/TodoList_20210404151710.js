import React, { useState } from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

const TodoList = () => {
  const [data, setData] = useState([
    { todo: 'Buy a guitar', id: '1' },
    { todo: 'Go to a theater', id: '2' },
    { todo: 'Study programing', id: '3' },
  ]);

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
