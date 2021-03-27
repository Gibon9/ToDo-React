import React from 'react';
import styled from 'styled-components';

const StyeldButton = styled.button`
  margin-right: 25px;
  background-color: transparent;
  border: none;
`;

const DeleteButton = () => <StyeldButton>X</StyeldButton>;

export default DeleteButton;
