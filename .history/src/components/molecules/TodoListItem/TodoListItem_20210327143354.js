import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledParagraph } from './TodoListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const TodoListItem = ({ data }, deleteTodo) => (
  <Wrapper>
    <StyledParagraph>{data}</StyledParagraph>
    <DeleteButton onClick={() => deleteTodo(value)} />
  </Wrapper>
);

TodoListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TodoListItem;
