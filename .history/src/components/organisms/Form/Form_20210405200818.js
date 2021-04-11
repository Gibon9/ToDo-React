import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 378px;
  height: 438px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const Form = () => {
  return <Wrapper></Wrapper>;
};

export default Form;
