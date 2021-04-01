import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyeledButton } from './DeleteButton.styles';

const handleDelete = () => {};

const DeleteButton = () => (
  <StyeledButton onClick={handleDelete}>
    <DeleteIcon />
  </StyeledButton>
);

export default DeleteButton;
