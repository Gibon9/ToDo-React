import React, { useState } from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

class TodoList extends React.Component {
  deleteTodo = (id) => {
    const filteredUsers = data.filter((todo) => todo.id !== id);
    setData(filteredUsers);
  };

  render() {
    <Wrapper>
      <StyledHeader>ToDo List</StyledHeader>
      <StyledList>
        {console.log(data)}
        {todos.map((data) => (
          <TodoListItem deleteTodo={deleteTodo} key={data.id} data={data} />
        ))}
      </StyledList>
      <AddButton />
    </Wrapper>;
  }
}

export default TodoList;
