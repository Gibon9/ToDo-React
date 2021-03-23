import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li``;

const TodoListItem = ({ data }) => (
  <li>
    <p>{data}</p>
    <button>X</button>
  </li>
);

TodoListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TodoListItem;
