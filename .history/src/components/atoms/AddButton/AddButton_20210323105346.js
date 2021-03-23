import React from 'react';
import { styled } from 'styled-components';

const StyledButton = styled.button`
  height: 59px;
  width: 414px;
  border-radius: 15px;
`;

const AddButton = () => <StyledButton>Add ToDo</StyledButton>;

export default AddButton;
