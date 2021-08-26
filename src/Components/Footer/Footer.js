import React from 'react';
import { Container } from 'react-bootstrap';
import {
  Grid,
  Typography,
  Button,
  IconButton,
  TextField,
} from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';

import {
  AiOutlinePhone,
  AiOutlineHome,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaTelegramPlane, FaInstagram, FaReact } from 'react-icons/fa';

import './footer.css';

import LogoImg from '../../assets/img/Dehqon_bozori.png';

function Footer({ products }) {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 770, min: 421 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Container id="footer" fluid>
        <Carousel
          className="footerCarousel my-3"
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          autoPlaySpeed={1000}
          autoPlay={true}
          infinite={true}
          arrows={false}
        >
          {products.map((e) => (
            <img key={e.id} src={e.media.source} alt={e.name} />
          ))}
        </Carousel>
      </Container>

      <Container>
        <Grid
          className="my-3"
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6} md={4}>
            <img src={LogoImg} alt="site logo" />
            <Typography className="footerInfo" variant="body2">
              <AiOutlineHome />
              <span> Toshkent, Yunusobod, Amir Temur 108A</span>
            </Typography>

            <Typography className="footerInfo" variant="body2">
              <AiOutlinePhone /> <span>+998977777777</span>
            </Typography>

            <Typography className="footerInfo" variant="body1">
              <IconButton href="#">
                <FaTelegramPlane />
              </IconButton>
              <IconButton href="#">
                <FaInstagram />
              </IconButton>
              <IconButton href="#">
                <AiFillFacebook />
              </IconButton>
              <IconButton href="#">
                <AiOutlineTwitter />
              </IconButton>
            </Typography>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography className="footerInfo" variant="body1">
              <strong> {t('footer.dev')}</strong>
            </Typography>
            <Typography className="footerInfo" variant="body2">
              {t('footer.fdev')}{' '}
              <a className="siteDev" href="https://Asadbekazamov.uz">
                Azamov
              </a>
            </Typography>

            <Typography className="footerInfo" variant="body2">
              Powered by React.js <FaReact />
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography className="text-center" variant="body1">
              <strong>{t('footer.contact')}</strong>
            </Typography>
            <form>
              <TextField
                className="mt-2"
                fullWidth
                label="Email"
                type="email"
              />

              <TextField fullWidth label="Massage" multiline rows={2} />
              <Button
                fullWidth
                variant="contained"
                className="btn"
                color="primary"
                endIcon={<FaTelegramPlane />}
                type="submit"
              >
                {t('footer.send')}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <div className="footer">
        <span>
          O'zbekiston | 2021 design by &nbsp;
          <a className="siteDev" href="https://Asadbekazamov.uz">
            Azamov
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
