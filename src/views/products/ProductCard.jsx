import React from "react";
import { useStyles } from "../../hooks/useMuiStyle";
import { Box, Grid, Paper } from "@mui/material";
import Cards from "../../components/cards/Cards";
import pimg from "../../Assets/product/pd1.jpeg"
const ProductCard = () => {
  const classes = useStyles();
  return (
    <Box component={Paper} className={classes.freshArraival}>
      <Box className={classes.viewCardHeader}>
        <h3><span style={{color:"#343a40"}}>Fresh</span><span style={{color:"#16754D"}}> Arrivals </span></h3>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
        //   spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(5)).map((_, index) => (
            <Grid item xs={2} sm={3} md={2.4} key={index}>
              <Cards pImg={pimg} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductCard;
