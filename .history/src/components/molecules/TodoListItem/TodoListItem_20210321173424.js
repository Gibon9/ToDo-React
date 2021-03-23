import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ data }) => (
  <li>
    <div>
      <p>{data}</p>
      <button>X</button>
    </div>
  </li>
);

TodoListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TodoListItem;
