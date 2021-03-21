import React from 'react';
import { todos } from 'data/todos';

const TodoList = () => (
  <div>
    <h1>ToDo List</h1>
    <ul>
      <li>
        <div>
          <h2>Buy a Guitar</h2>
          <button>X</button>
        </div>
      </li>
    </ul>
  </div>
);

export default TodoList;
