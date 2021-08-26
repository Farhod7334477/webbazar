import { Grid } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import CardDehqon from '../Card/CardDehqon';
import Loader from '../Loader/Loader';

const Searching = ({ searchElementData, addCart }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  if (!searchElementData) return <Loader />;
  return (
    <>
      <Container className="my-3">
        <Grid container spacing={3}>
          {searchElementData.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <CardDehqon
                imgSite={product.media.source}
                handleRatingChanged={ratingChanged}
                TitleProduct={product.name}
                coastProduct={product.price.raw}
                //  bagdeText={t('main.top')}
                index={product.id}
                imgAlt={product.name}
                addCart={addCart}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Searching;
