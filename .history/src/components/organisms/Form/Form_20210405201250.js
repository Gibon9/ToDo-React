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

const StyledHeader = styled.div`
  padding-top: 10px;
  margin: 40px 10px 30px;
  width: 70%;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  border-bottom: solid 3px ${({ theme }) => theme.colors.lighBlue};
`;

const Form = () => {
  return (
    <Wrapper>
      <StyledHeader>New ToDo:</StyledHeader>
    </Wrapper>
  );
};

export default Form;
