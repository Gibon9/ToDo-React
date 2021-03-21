import React from 'react';

const TodoListItem = ({ data }) => (
  <div>
    <p>{data}</p>
    <button>X</button>
  </div>
);

export default TodoListItem;
