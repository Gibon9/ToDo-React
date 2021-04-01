import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledParagraph } from './TodoListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const TodoListItem = ({ data: { todo, id } }, deleteTodo) => (
  <Wrapper>
    <StyledParagraph>{data}</StyledParagraph>
    <DeleteButton onClick={() => deleteTodo(data)} />
  </Wrapper>
);

TodoListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TodoListItem;
