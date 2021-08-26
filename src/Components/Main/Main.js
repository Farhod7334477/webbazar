// import { Grid, Card, Typography, Button } from '@material-ui/core';
import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineRight } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/img/mevalar.png';
import Img2 from '../../assets/img/mevalar2.png';
import Img from '../../assets/img/header_fv.png';
import 'react-multi-carousel/lib/styles.css';
import './main.css';
import { Link } from 'react-router-dom';
import CardDehqon from '../Card/CardDehqon';

function Main({ products, addCart }) {
  const { t } = useTranslation();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="header">
        <Container>
          <Grid
            className="headerh"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid data-aos="zoom-in" item xs={12} sm={6}>
              <Typography className="pt-4 pt-sm-0" variant="body1">
                {t('main.home')}
              </Typography>
              <Typography
                style={{
                  fontWeight: 'bold',
                  fontSize: '80px',
                  color: '#47a04b',
                }}
                variant="h1"
              >
                Dehqon Bozor
              </Typography>

              <Button
                component={Link}
                to="/shop"
                variant="contained"
                className="btndark mt-2"
              >
                {t('main.buy')}
              </Button>
            </Grid>
            <Grid data-aos="fade-right" item xs={12} sm={6}>
              <img src={Img} alt="" />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container fluid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={2}
        >
          <Grid
            data-aos="fade-right"
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={6}
          >
            <Grid
              className="bannerone mt-3 mb-0 my-md-3 "
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Grid className="p-4" item xs={12} sm={6}>
                <Typography variant="body1">{t('main.home')}</Typography>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '40px',
                    color: '#47a04b',
                  }}
                  variant="h2"
                >
                  Dehqon Bozor
                </Typography>

                <Button
                  component={Link}
                  to="/shop"
                  variant="contained"
                  className="btndark mt-2"
                >
                  {t('main.buy')}
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <img src={Img2} alt="" />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            data-aos="fade-left"
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={6}
          >
            <Grid
              className="bannerone my-md-3 "
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Grid className="p-4" item xs={12} sm={6}>
                <Typography variant="body1">{t('main.home')}</Typography>
                <Typography
                  style={{
                    fontWeight: 'bold',
                    fontSize: '40px',
                    color: '#47a04b',
                  }}
                  variant="h2"
                >
                  Dehqon Bozor
                </Typography>

                <Button
                  component={Link}
                  to="/shop"
                  variant="contained"
                  className="btndark mt-2"
                >
                  {t('main.buy')}
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <img src={Img1} alt="" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container className="pt-5 pb-2">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={2}
        >
          <Grid data-aos="fade-right" className="text-left mt-4" item xs={6}>
            <Typography variant="h4">{t('main.trending')}</Typography>
          </Grid>
          <Grid className="text-right mt-4" item xs={6}>
            <Button
              data-aos="fade-left"
              component={Link}
              to="/shop"
              variant="outlined"
              className="btnCategory"
              color="primary"
              endIcon={<AiOutlineRight color="#90ee90" />}
            >
              {t('main.all')}
            </Button>
          </Grid>

          <Grid
            className=" my-2"
            item
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            {products
              .filter((product) => product.price.raw > 5000)
              .slice(2, 14)
              .map((product) => (
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
                    bagdeText={t('main.top')}
                    index={product.id}
                    imgAlt={product.name}
                    addCart={addCart}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Container>
      <div className="mainBanner py-4">
        <Container data-aos="zoom-in">
          <Typography
            style={{
              fontWeight: 'bold',
              fontSize: '80px',
              color: '#47a04b',
            }}
            variant="h1"
          >
            Dehqon Bozor
          </Typography>

          <Button
            component={Link}
            to="/shop"
            variant="contained"
            className="btndark mt-2"
          >
            {t('main.buy')}
          </Button>
        </Container>
      </div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid className="text-left mt-4" item xs={12}>
            <Typography variant="h4">{t('main.new')}</Typography>
          </Grid>

          <Grid
            className=" my-2"
            item
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            {products.slice(20, 36).map((product) => (
              <Grid
                data-aos="zoom-in"
                key={product.id}
                item
                xs={12}
                sm={6}
                md={3}
              >
                <CardDehqon
                  imgSite={product.media.source}
                  handleRatingChanged={ratingChanged}
                  TitleProduct={product.name}
                  coastProduct={product.price.raw}
                  index={product.id}
                  imgAlt={product.name}
                  addCart={addCart}
                  bagdeText={t('main.yangi')}
                  cardBadge={{ backgroundColor: 'red' }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Main;
