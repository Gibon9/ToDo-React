import React, { useState } from 'react';
import { todos } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([...todos]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const TodoList = () => {
  state = {
    todos: [],
    isLoading: false,
  };

  // this.setState({ isLoading: true });
  // mockAPI()
  //   .then((data) => {
  //     this.setState({ isLoading: false });
  //     this.setState({ todos: data });
  //   })
  //   .catch((err) => console.log(err));

  deleteTodo = (id) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filteredTodos });
  };

  return (
    <Wrapper>
      <StyledHeader>
        {this.state.isLoading ? 'Loading...' : 'ToDo List'}
      </StyledHeader>
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
};

export default TodoList;
