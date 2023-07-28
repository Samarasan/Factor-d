import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="allProductFeature">
      <div className="media" 
      // onClick={()=> navigate(`/category/${item.id}?name=${item.catName}`)}
      >
        <div className="mediaImg">
          <img src={item.pIcon} alt="circuit" className="allprodimg" />
        </div>
        <h4 className="allprodtitle">{item && item.catName}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
