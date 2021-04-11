import TodoList from 'components/organisms/TodoList/TodoList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Switch>
          <Route path="/">
            <TodoList />
          </Route>
          {/* <Route path="/AddForm"> */}
          <Form />
          {/* </Route> */}
        </Switch>
      </Wrapper>
    </ThemeProvider>
  </Router>
);

export default Root;
