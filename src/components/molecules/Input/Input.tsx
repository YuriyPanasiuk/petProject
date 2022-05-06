import React from 'react';
import { TextField } from '@mui/material';

interface Props {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const Input: React.FC<Props> = ({ value, onChange, label = 'default' }) => {
  return (
    <TextField
      value={value}
      label={label}
      variant="outlined"
      fullWidth
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
