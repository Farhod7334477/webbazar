import { Card, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { BsEye } from 'react-icons/bs';
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './CardDehqon.css';

function CardDehqon({
  imgSite,
  imgAlt,
  handleRatingChanged,
  TitleProduct,
  coastProduct,
  cardBadge,
  bagdeText,
  index,
  addCart,
}) {
  return (
    <>
      <Card className="cardMain">
        <div className="cardImg">
          <img src={imgSite} alt={imgAlt ? imgAlt : 'CardPic'} />
          <div className="btnBox">
            <Link to={`/product/${index}`}>
              <IconButton className="iconCard">
                <BsEye />
              </IconButton>
            </Link>

            <IconButton
              onClick={() => addCart(index, 1)}
              className="iconCard icart"
            >
              <FaCartArrowDown />
            </IconButton>

            <IconButton className="iconCard">
              <FaRegHeart />
            </IconButton>
          </div>
        </div>
        <div className="cardBody">
          <ReactStars
            className="mt-2"
            count={5}
            onChange={handleRatingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <Typography className="my-1" variant="body1">
            {TitleProduct}
          </Typography>
          <Typography className="coast my-2 " variant="body2">
            <span className="text-success h5">{coastProduct}</span> So'm
          </Typography>
        </div>
        {bagdeText ? (
          <div
            style={cardBadge ? cardBadge : { backgroundColor: 'black' }}
            className="badgeCard"
          >
            {bagdeText}
          </div>
        ) : null}
      </Card>
    </>
  );
}

export default CardDehqon;
