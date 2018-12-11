// @flow

import React from 'react';

import Button from '@material-ui/core/Button';

type Props = {
  children: string,
  onClick: Function,
};

const NormalButton = ({ children, onClick }: Props) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {children}
  </Button>
);

export default NormalButton;
