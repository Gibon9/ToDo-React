import AddButton from 'components/atoms/AddButton/AddButton';
import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 438px;
  width: 378px;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  border-radius: 20px;
  padding: 30px;
`;

const StyledTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.lighBlue};
  width: 270px;
  border-bottom: ${({ theme }) => theme.colors.lighBlue} solid 3px;
  padding-bottom: 10px;
`;

const AddForm = ({ label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <StyledForm>
        <StyledTitle>New ToDo:</StyledTitle>
        <Label htmlFor={id}>{label}</Label>
        <Input name={name} id={id} type={type} />
        <AddButton>Add</AddButton>
      </StyledForm>
    </Wrapper>
  );
};

export default AddForm;
