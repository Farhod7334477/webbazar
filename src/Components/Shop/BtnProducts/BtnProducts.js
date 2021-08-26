import { Button } from '@material-ui/core';
import React from 'react';

const BtnProducts = ({ tittle, onClick }) => {
  return (
    <Button className="btnProduct m-1" onClick={onClick} variant="outlined">
      {tittle}
    </Button>
  );
};

export default BtnProducts;
