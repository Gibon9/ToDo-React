import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyeledButton } from './DeleteButton.styles';

const DeleteButton = () => (
  <StyeledButton>
    <DeleteIcon />
  </StyeledButton>
);

export default DeleteButton;
