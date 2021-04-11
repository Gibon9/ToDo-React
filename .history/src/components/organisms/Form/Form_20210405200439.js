import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 378px;
  height: 438px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

const Form = () => {
  return <Wrapper></Wrapper>;
};

export default Form;
