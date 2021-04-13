import TodoList from 'components/organisms/TodoList/TodoList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import React from 'react';
import TodoProvider from 'providers/TodoProvider';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoProvider>
        <Wrapper>
          <Switch>
            <Route path="/Form">
              <Form />
            </Route>
            <Route path="/">
              <TodoList />
            </Route>
          </Switch>
        </Wrapper>
      </TodoProvider>
    </ThemeProvider>
  </Router>
);

export default Root;
