import TodoList from 'components/TodoList/TodoList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
  background-color: #e5e5e5;
`;

const Root = () => (
  <Wrapper>
    <TodoList />
  </Wrapper>
);

export default Root;
