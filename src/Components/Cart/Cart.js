import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography, Container } from '@material-ui/core';
import EmojiImg from '../../assets/img/rasmEmoji.png';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Cart({ cart, handleUpdateQ, handleRemoveCartItem, handleEmptyCard }) {
  const { t } = useTranslation();

  if (!cart.line_items) return <Loader />;

  const EmptyCart = () => (
    <Grid
      data-aos="zoom-in-up"
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      xs={12}
      className="text-center"
    >
      <Grid item xs={12}>
        <Typography style={{ color: '#fdb51a' }} variant="h6">
          {t('cart.empty')} <Link to="/">{t('cart.btn')}</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img style={{ maxWidth: '300px' }} src={EmojiImg} alt="emoji" />
      </Grid>
    </Grid>
  );

  const SubTotalCart = () => (
    <>
      <Grid item xs={12} container>
        {cart.line_items.map((item) => (
          <Grid
            data-aos="zoom-in"
            className="p-2 p-md-3"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={item.id}
          >
            <CartItem
              handleUpdateQ={handleUpdateQ}
              handleRemoveCartItem={handleRemoveCartItem}
              item={item}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        className=" p-3"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        item
        xs={12}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">
            {t('cart.sub')} &nbsp;
            <span className="font-weight-bold text-success">
              {cart.subtotal.formatted_with_code}
            </span>
          </Typography>
        </Grid>
        <Grid sm={4} item></Grid>
        <Grid item xs={12} lg={4}>
          <Button
            size="large"
            variant="contained"
            className="btn"
            color="primary"
            type="button"
            component={Link}
            to="/checkout"
          >
            {t('cart.buy')}
          </Button>

          <Button
            size="large"
            className="ml-3"
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleEmptyCard}
          >
            {t('cart.nobuy')}
          </Button>
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <Container>
        <Grid
          data-aos="fade-up-right"
          className="my-3"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography className="pl-5" variant="h4">
              {t('cart.title')}
            </Typography>
          </Grid>
          {!cart.line_items.length ? <EmptyCart /> : <SubTotalCart />}
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
