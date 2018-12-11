// @flow

import React from 'react';

import Button from '@material-ui/core/Button';

type Props = {
  children: string,
  handleClick: Function,
};

const NormalButton = ({ children, handleClick }: Props) => (
  <Button variant="contained" color="primary" onClick={handleClick}>
    {children}
  </Button>
);

export default NormalButton;
