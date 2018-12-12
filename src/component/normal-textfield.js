// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  id: string,
  label: string,
  placeholder: string,
  handleChange: Function,
  handleKey: Function,
};

const NormalTextField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
}: Props) => (
  <TextField
    id={id}
    label={label}
    placeholder={placeholder}
    margin="normal"
    variant="outlined"
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

export default NormalTextField;
