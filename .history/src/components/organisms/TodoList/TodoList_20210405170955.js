import React, { useState } from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

class TodoList extends React.Component {
  state = {
    todos,
  };

  deleteTodo() {}

  render() {
    return (
      <Wrapper>
        <StyledHeader>ToDo List</StyledHeader>
        <StyledList>
          {this.state.todos.map((data) => (
            <TodoListItem
              deleteTodo={this.deleteTodo}
              key={data.id}
              data={data}
            />
          ))}
        </StyledList>
        <AddButton />
      </Wrapper>
    );
  }
}

export default TodoList;
