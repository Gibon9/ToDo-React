import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'views/Root.styled';

const AddForm = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} />
    </Wrapper>
  );
};

export default AddForm;
