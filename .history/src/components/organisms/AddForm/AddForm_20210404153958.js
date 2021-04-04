import { Wrapper } from 'components/molecules/TodoListItem/TodoListItem.styles';
import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.div``;

const AddForm = () => {
  return (
    <FormWrapper>
      <StyledForm></StyledForm>
    </FormWrapper>
  );
};

export default AddForm;
