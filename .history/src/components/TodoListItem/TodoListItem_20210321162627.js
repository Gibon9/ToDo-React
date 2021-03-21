import React from 'react';

const TodoListItem = (props) => (
  <div>
    <p>{props.data}</p>
    <button>X</button>
  </div>
);

export default TodoListItem;
