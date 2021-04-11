import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const AddForm = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input />
    </>
  );
};

export default AddForm;
