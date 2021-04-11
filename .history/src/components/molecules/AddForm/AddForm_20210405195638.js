import React from 'react';
import { Label } from 'components/atoms/Label/Label';

const AddForm = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
    </>
  );
};

export default AddForm;
