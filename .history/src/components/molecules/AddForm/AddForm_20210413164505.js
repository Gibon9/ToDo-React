import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './AddForm.styles';

const AddForm = ({
  onChange,
  value,
  label,
  name,
  id,
  type = 'text',
  ...props
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default AddForm;
