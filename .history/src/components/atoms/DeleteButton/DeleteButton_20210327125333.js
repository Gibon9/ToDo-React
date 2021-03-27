import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const StyeledButton = styled.button`
  margin-right: 25px;
  background-color: transparent;
  border: none;
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.colors.lightOrange};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkOrange};
  }
`;

const DeleteButton = () => (
  <StyeledButton>
    <DeleteIcon />
  </StyeledButton>
);

export default DeleteButton;
