import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const StyeledButton = styled.button`
  margin-right: 25px;
  background-color: transparent;
  border: red solid 1px;
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.colors.lightOrange};
  cursor: pointer;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  svg:hover {
    fill: ${({ theme }) => theme.colors.darkOrange};
  }

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
