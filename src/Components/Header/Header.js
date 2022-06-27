import React, { useState } from 'react';
import Data from '../Data/Data';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';
import 'flag-icon-css/css/flag-icon.min.css';
import { useTranslation } from 'react-i18next';
import { Grid, TextField, Button, Badge, Typography } from '@material-ui/core';
import { BsSearch } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import HeaderLogo from '../../assets/img/Dehqon_bozori.png';

function Header({ totalItem, handleClickInp, handleChange }) {
  const location = useLocation();
  const pathName = location.pathname;
  const { t, i18n } = useTranslation();

  const handleSearchClick = () => {
    setClick(!click);
  };
  const [click, setClick] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 30) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 30) {
      setShowScroll(false);
    }
  };
  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <div data-aos="fade-left" className="nav_infos">
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid onClick={handleSearchClick} item xs={4}>
              <Typography className="search">
                <BsSearch style={{ cursor: 'pointer' }} /> &nbsp;{' '}
                {t('nav.search')}
              </Typography>
            </Grid>

            <Grid className="icons" item xs={8}>
              {pathName !== '/cart' && (
                <Link
                  // className={showScroll && 'fixedCart'}
                  to="/cart"
                >
                  <Badge
                    className="cart"
                    badgeContent={totalItem}
                    color="error"
                  >
                    <GiShoppingCart />
                  </Badge>
                </Link>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container className={click ? 'cont showSearch ' : 'cont hiddenSearch '}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={7} md={6}>
            <TextField
              fullWidth
              id="site-search"
              label="Search field"
              type="search"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              className="btn"
              startIcon={<BsSearch />}
              onClick={handleClickInp}
            >
              {t('nav.btn')}
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant={!showScroll ? 'dark' : 'light'}
        bg={!showScroll && 'dark'}
        className={
          showScroll ? 'transition navbarDehqonscrool' : 'transition  '
        }
      >
        <Container>
          <Navbar.Brand className="py-0" href="#">
            <Nav.Link className="py-0" as={NavLink} to="/">
              <img className="site-logo " src={HeaderLogo} alt="site logo" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                className={pathName === '/' ? 'header_active' : 'header_link'}
              >
                {t('nav.home')}
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/shop"
                className={
                  pathName === '/shop'
                    ? 'header_active anime_fath'
                    : 'header_link anime_fath'
                }
              >
                {t('nav.shop')}
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                href="#footer"
                className={
                  pathName === '/contact' ? 'header_active' : 'header_link'
                }
              >
                {t('nav.con')}
              </Nav.Link>

              <NavDropdown className="header_link" title={t('nav.lang')}>
                {Data.languageHeader.map((e, i) => {
                  return (
                    <NavDropdown.Item
                      key={i}
                      onClick={() => handleClick(`${e.code}`)}
                    >
                      <span
                        className={`flag-icon flag-icon-${e.country_code} mx-2`}
                      ></span>
                      {e.title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {showScroll & (pathName !== '/cart') ? (
            <div className="fixedCart">
              <Link className="fixedCart" to="/cart">
                <Badge className="cart" badgeContent={totalItem} color="error">
                  <GiShoppingCart />
                </Badge>
              </Link>
            </div>
          ) : null}
        </Container>
      </Navbar>
    </>
  );

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
}

export default Header;
