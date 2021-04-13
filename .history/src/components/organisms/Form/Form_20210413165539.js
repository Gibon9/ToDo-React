import AddButton from 'components/atoms/AddButton/AddButton';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import { ReactComponent as CloseIcon } from 'assets/icons/close-icon.svg';
import AddForm from 'components/molecules/AddForm/AddForm';
import React, { useContext, useState } from 'react';
import { Wrapper, StyledHeader } from './Form.styles';
import { Link } from 'react-router-dom';
import { TodoContext } from 'providers/TodoProvider';

const Form = () => {
  const context = useContext(TodoContext);
  const [formValue, setFormValue] = useState('');

  const handleInputChange = (e) => {
    setFormValue(e.target.value);
  };

  const handleAddTodo = () => {};

  return (
    <Wrapper as="form" onSubmit={handleAddTodo}>
      <StyledHeader>Add New ToDo:</StyledHeader>
      <AddForm
        name="AddToDo"
        id="AddToDo"
        type="AddToDo"
        label="Add ToDo"
        value={formValue}
        onChange={handleInputChange}
      />
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
