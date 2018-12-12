// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
  id: string,
  label: string,
  placeholder: string,
  onChange: Function,
  onKeyDown: Function,
};

const NormalTextField = ({
  id,
  label,
  placeholder,
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
