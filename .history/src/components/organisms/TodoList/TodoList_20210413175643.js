import React, { useContext } from 'react';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, StyledHeader, StyledList } from './TodoList.styled';
import AddButton from 'components/atoms/AddButton/AddButton';
import { Link } from 'react-router-dom';
import { TodoContext } from 'providers/TodoProvider';

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <Wrapper>
      <StyledHeader>ToDo List</StyledHeader>
      <StyledList>
        {todos.map((data) => (
          <TodoListItem deleteTodo={deleteTodo} key={data.id} data={data} />
        ))}
      </StyledList>
      <Link to="/Form">
        <AddButton />
      </Link>
    </Wrapper>
  );
};

export default TodoList;
