import React from 'react';
// import PropTypes from 'prop-types';
import { Wrapper, StyledParagraph } from './TodoListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const TodoListItem = ({ data: { todo, id } }, deleteTodo) => (
  <Wrapper>
    <StyledParagraph>{todo}</StyledParagraph>
    <DeleteButton onClick={() => deleteTodo(id)} />
  </Wrapper>
);

// TodoListItem.propTypes = {
//   todo: PropTypes.string.isRequired,
// };

export default TodoListItem;
