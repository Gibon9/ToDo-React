import React, { useState, useEffect } from 'react';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';
import { Link } from 'react-router-dom';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <StyledHeader>{isLoading ? 'Loading...' : 'ToDo List'}</StyledHeader>
      <StyledList>
        {todos.map((data) => (
          <TodoListItem
            deleteTodo={context.deleteTodo}
            key={data.id}
            data={data}
          />
        ))}
      </StyledList>
      <Link to="/Form">
        <AddButton />
      </Link>
    </Wrapper>
  );
};

export default TodoList;
