import TodoList from 'components/organisms/TodoList/TodoList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%auto;
  height: 100vh;
  background-color: #e5e5e5;
`;

const Root = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Wrapper>
      <TodoList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
