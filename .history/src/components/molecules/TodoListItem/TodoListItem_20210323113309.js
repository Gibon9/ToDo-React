import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighBlue};
  color: ${({ theme }) => theme.colors.lighOrange};
`;

const TodoListItem = ({ data }) => (
  <Wrapper>
    <p>{data}</p>
    <button>X</button>
  </Wrapper>
);

TodoListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TodoListItem;
