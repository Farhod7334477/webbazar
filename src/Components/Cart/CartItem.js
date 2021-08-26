import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const CartItem = ({ item, handleUpdateQ, handleRemoveCartItem }) => {
  const { t } = useTranslation();

  return (
    <Card className="text-center">
      <img
        style={{ maxHeight: '200px', objectFit: 'cover' }}
        className="img-fluid p-4"
        src={item.media.source}
        alt={item.name}
      />
      <CardContent>
        <Typography className="mx-2 text-center" variant="body1">
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          className="mx-2 mt-2 bg-light text-success border text-center p-2 rounded"
        >
          {item.line_total.formatted_with_code}
        </Typography>
      </CardContent>
      <CardActions className="mb-2">
        <Button
          onClick={() => handleUpdateQ(item.id, item.quantity - 1)}
          type="button"
          size="small"
        >
          -
        </Button>
        <Typography variant="small">{item.quantity}</Typography>
        <Button
          onClick={() => handleUpdateQ(item.id, item.quantity + 1)}
          type="button"
          size="small"
        >
          +
        </Button>

        <Button
          onClick={() => handleRemoveCartItem(item.id)}
          variant="contained"
          color="Secondary"
          type="button"
        >
          {t('cart.remove')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
