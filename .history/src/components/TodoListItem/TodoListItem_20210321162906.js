import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ data }) => (
  <div>
    <p>{data}</p>
    <button>X</button>
  </div>
);

export default TodoListItem;
