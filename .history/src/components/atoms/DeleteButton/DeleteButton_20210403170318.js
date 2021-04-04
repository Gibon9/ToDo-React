import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyeledButton } from './DeleteButton.styles';

const DeleteButton = (props) => (
  <StyeledButton {...props}>
    <DeleteIcon />
  </StyeledButton>
);

export default DeleteButton;
