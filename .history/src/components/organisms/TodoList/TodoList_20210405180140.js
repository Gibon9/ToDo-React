import React, { useState, useEffect } from 'react';
import { todos as todosData } from 'data/todos';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (todosData) {
        resolve([...todosData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // this.setState({ isLoading: true });
  // mockAPI()
  //   .then((data) => {
  //     this.setState({ isLoading: false });
  //     this.setState({ todos: data });
  //   })
  //   .catch((err) => console.log(err));

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos({ todos: filteredTodos });
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
