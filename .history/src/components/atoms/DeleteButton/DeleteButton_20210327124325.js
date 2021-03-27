import React from 'react';
import styled from 'styled-components';

const StyeldButton = styled.button`
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

const DeleteButton = () => <StyeldButton>X</StyeldButton>;

export default DeleteButton;
