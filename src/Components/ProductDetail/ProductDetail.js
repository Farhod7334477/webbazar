import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { FaRegHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './productDetail.css';

function ProductDetail({ products, addCart }) {
  const location = useLocation();
  const pathName = location.pathname;
  const ProductId = pathName.substr(9);
  const { t } = useTranslation();

  const SelectedProduct = products.filter(
    (product) => product.id === ProductId
  );
  console.log(SelectedProduct);
  return (
    <>
      <Container>
        {SelectedProduct.map((product) => (
          <Grid
            className="my-5"
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid className="imgPage" item xs={12} md={6}>
              <img src={product.media.source} alt={product.name} />
            </Grid>

            <Grid
              container
              direction="column"
              className="p-4"
              item
              xs={12}
              md={6}
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography className="font-weight-bold" variant="h4">
                  {product.name}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <ReactStars
                  className="mt-2"
                  count={5}
                  value={4.5}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <span className="coast">
                    {product.price.formatted_with_code}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  className="DetailText"
                  variant="body2"
                />
              </Grid>

              <Grid
                className=" mt-4"
                container
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
                spacing={4}
              >
                <Grid item xs={8}>
                  <Button
                    fullWidth
                    variant="contained"
                    className="btn"
                    color="primary"
                    onClick={() => addCart(product.id, 1)}
                  >
                    {t('cart.add')}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <IconButton className="iconCard">
                    <FaRegHeart />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
}

export default ProductDetail;
