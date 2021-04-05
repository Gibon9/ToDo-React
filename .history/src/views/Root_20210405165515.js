import TodoList from 'components/organisms/TodoList/TodoList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import AddForm from 'components/organisms/AddForm/AddForm';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Switch>
          <Route path="/">
            <TodoList />
          </Route>
          {/* <Route path="/AddForm">
            <AddForm name="Add ToDo" id="Add ToDo" />
          </Route> */}
        </Switch>
      </Wrapper>
    </ThemeProvider>
  </Router>
);

export default Root;
