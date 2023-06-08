import React from "react";
import { Link } from "react-router-dom";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Cards = ({pImg}) => {
  return (
    <React.Fragment>
      <div className="cardContainer">
        <div className="product-list">
          <div className="product-img-wrap">
            <img
              src={pImg}
              alt="img"
              className="product-img-primary"
            />
          </div>
          <div className="product-info">
            <Link to='/' className="product-info-title" >
            Product-info-title
            </Link>
            <div className="product-info-rating">
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
            </div>
            <div className="product-info-price">
                <span className="product-info-price-new">₹799</span>
                <span className="old-price">₹999</span>
            </div>
            <div className="discoung_tag1">33% off</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
