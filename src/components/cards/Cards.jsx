import React from "react";
import { Link, useNavigate } from "react-router-dom";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Cards = ({data}) => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className="cardContainer" onClick={()=> navigate('/singleProduct')}>
        <div className="product-list">
          <div className="product-img-wrap">
            <img
              src={data.img}
              alt="img"
              className="product-img-primary"
            />
          </div>
          <div className="product-info">
            <Link to='/' className="product-info-title" >
            {data.title}
            </Link>
            <div className="product-info-rating">
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
                <span><StarOutlineIcon sx={{fontSize:"16px !important"}}/></span>
            </div>
            <div className="product-info-price">
                <span className="product-info-price-new">₹{data.price}</span>
                <span className="old-price">₹{data.oldPrice}</span>
            </div>
            <div className="discoung_tag1">{data.offer}% off</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
