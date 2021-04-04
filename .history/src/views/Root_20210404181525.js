import TodoList from 'components/organisms/TodoList/TodoList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <TodoList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
