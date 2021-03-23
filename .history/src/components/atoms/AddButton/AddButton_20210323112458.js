import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  height: 53px;
  width: 181px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.lighBlue};
  background-color: ${({ theme }) => theme.colors.lightOrange};
  border: solid 3px ${({ theme }) => theme.colors.lighBlue};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkOrange};
  }
`;

const AddButton = () => <StyledButton>Add ToDo</StyledButton>;

export default AddButton;
