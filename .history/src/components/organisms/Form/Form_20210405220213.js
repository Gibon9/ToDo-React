import AddButton from 'components/atoms/AddButton/AddButton';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';
import AddForm from 'components/molecules/AddForm/AddForm';
import React from 'react';
import { Wrapper, StyledHeader } from './Form.styles';

const Form = () => {
  return (
    <Wrapper>
      <StyledHeader>Add New ToDo:</StyledHeader>
      <AddForm
        name="AddToDo"
        id="AddToDo"
        type="AddToDo"
        placeholder="AddToDo"
      />
      <AddButton />
      <CloseButton>
        <CloseIcon />
      </CloseButton>
    </Wrapper>
  );
};

export default Form;
