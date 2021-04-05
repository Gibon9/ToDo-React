import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState([]);

  // this.setState({ isLoading: true });
  // mockAPI()
  //   .then((data) => {
  //     this.setState({ isLoading: false });
  //     this.setState({ todos: data });
  //   })
  //   .catch((err) => console.log(err));

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setState({ todos: filteredTodos });
  };

  return (
    <Wrapper>
      <StyledHeader>
        {this.state.isLoading ? 'Loading...' : 'ToDo List'}
      </StyledHeader>
      <StyledList>
        {todos.map((data) => (
          <TodoListItem deleteTodo={deleteTodo} key={data.id} data={data} />
        ))}
      </StyledList>
      <AddButton />
    </Wrapper>
  );
};

export default TodoList;
