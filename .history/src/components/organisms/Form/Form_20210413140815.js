import AddButton from 'components/atoms/AddButton/AddButton';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';
import AddForm from 'components/molecules/AddForm/AddForm';
import React from 'react';
import { Wrapper, StyledHeader } from './Form.styles';
import { Link } from 'react-router-dom';
import { TodoContext } from 'views/Root';

const Form = () => {
  return (
    <Wrapper>
      <StyledHeader>Add New ToDo:</StyledHeader>
      <AddForm name="AddToDo" id="AddToDo" type="AddToDo" label="Add ToDo" />
      <Link to="/">
        <AddButton type="submit" />
      </Link>
      <Link to="/">
        <CloseButton>
          <CloseIcon />
        </CloseButton>
      </Link>
    </Wrapper>
  );
};

export default Form;
