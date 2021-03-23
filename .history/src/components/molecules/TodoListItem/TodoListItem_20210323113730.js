import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 414px;
  min-height: 59px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lighBlue};
  color: ${({ theme }) => theme.colors.lightOrange};
  font-size: ${({ theme }) => theme.fontSize.m};
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
