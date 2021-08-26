import { Grid } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import CardDehqon from '../Card/CardDehqon';
import BtnProducts from './BtnProducts/BtnProducts';

function Shop({ products, addCart, category }) {
  const [filterP, setFilterP] = useState([]);

  const bosildi = (id) => {
    const FilterProduct = products.filter(
      (i) => i.categories.filter((e) => e.id == id).length > 0
    );
    setFilterP(FilterProduct);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const Cards = () => (
    <Grid data-aos="fade-down" item container spacing={3}>
      {filterP.map((product) => (
        <Grid
          data-aos="zoom-in"
          key={product.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <CardDehqon
            imgSite={product.media.source}
            handleRatingChanged={ratingChanged}
            TitleProduct={product.name}
            coastProduct={product.price.raw}
            index={product.id}
            imgAlt={product.name}
            addCart={addCart}
          />
        </Grid>
      ))}
    </Grid>
  );

  const Products = () => (
    <Grid item container spacing={3}>
      {products.map((product) => (
        <Grid
          data-aos="zoom-in"
          key={product.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <CardDehqon
            imgSite={product.media.source}
            handleRatingChanged={ratingChanged}
            TitleProduct={product.name}
            coastProduct={product.price.raw}
            index={product.id}
            imgAlt={product.name}
            addCart={addCart}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container className="p-4">
      <Grid container spacing={3}>
        <Grid data-aos="zoom-in" item xs={12}>
          {category.map((category) => (
            <BtnProducts
              onClick={() => bosildi(category.id)}
              tittle={category.name}
            />
          ))}
        </Grid>

        {filterP.length > 0 ? <Cards /> : <Products />}
      </Grid>
    </Container>
  );
}

export default Shop;
