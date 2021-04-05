import AddButton from 'components/atoms/AddButton/AddButton';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';
import AddForm from 'components/molecules/AddForm/AddForm';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 378px;
  height: 438px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 0px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const StyledHeader = styled.div`
  margin: 60px 0 30px;
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
      <AddForm />
      <AddButton />
      <CloseButton>
        <
      </CloseButton>
    </Wrapper>
  );
};

export default Form;
