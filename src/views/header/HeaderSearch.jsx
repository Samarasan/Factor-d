import React, { useState } from "react";

// MUI
import { Box, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Hooks
// import { useProducts } from "../../products/useProducts";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../hooks/useMuiStyle";

const HeaderSearch = () => {
  const classes = useStyles()
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState("");

  // const { featureProducts } = useProducts();
  const onHandleChange = (e) => {
    e.preventDefault();
    setSearchResult(e.target.value);
  };
  const handleSearchItemClick = (id) =>{
    navigate(`/product/${id}`)
    setSearchResult('')
  }
  const filteredSerachResult =[]
  //  featureProducts.filter((item) => {
  //   return Object.values(item.pName)
  //     .join("")
  //     .toLowerCase()
  //     .includes(searchResult.toLowerCase());
  // });
  return (
    <Box className={classes.headerFullContain}>
      <Box className={classes.headerSerachContainer}>
        <Box className={classes.hsTextField}>
          <input
            className={classes.hsinput}
            placeholder="Search for products.."
            value={searchResult}
            onChange={onHandleChange}
            onKeyDown={(event) => event.stopPropagation()}
          />
        </Box>

        <Box className={classes.hsSearchIco}>
          <SearchIcon />
        </Box>
      </Box>
      <Box className={classes.searchBox}>
        {searchResult && (
          <ul style={{ marginTop: "20px" }}>
            {filteredSerachResult.map((item) => {
              return (
                <>
                  <li
                    className={classes.headersearchList}
                    key={item}
                    onClick={() => handleSearchItemClick(item.id)}
                  >
                    <Box className={classes.cartImgContainer}>
                      <img
                        src={item.imgUrl}
                        alt="search"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                    <Box className={classes.bagCartListDetails}>
                      <Box className={classes.bagCartText}>{item.pName}</Box>
                    </Box>
                  </li>
                  <Divider />
                </>
              );
            })}
          </ul>
        )}
      </Box>
    </Box>
   
  );
};

export default HeaderSearch;
