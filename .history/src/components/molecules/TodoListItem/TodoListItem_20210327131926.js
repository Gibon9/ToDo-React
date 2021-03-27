import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const TodoListItem = ({ data }) => (
  <Wrapper>
    <StyledParagraph>{data}</StyledParagraph>
    <DeleteButton />
  </Wrapper>
);

TodoListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TodoListItem;
