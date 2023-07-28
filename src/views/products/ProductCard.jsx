import React from "react";
import { useStyles } from "../../hooks/useMuiStyle";
import { Box, Grid, Paper } from "@mui/material";
import Cards from "../../components/cards/Cards";
import pimg from "../../Assets/product/pd1.jpeg"
import { freshArrivals } from "../../components/products/freshArrivals";
const ProductCard = () => {
  const classes = useStyles();
  console.log(freshArrivals);
  return (
    <Box component={Paper} className={classes.freshArraival}>
      <Box className={classes.viewCardHeader}>
        <h3><span style={{color:"#343a40"}}>Fresh</span><span style={{color:"#16754D"}}> Arrivals </span></h3>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
        //   spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          {freshArrivals.map((data, index) => (
            <Grid item xs={2} sm={4} md={2.4} key={index}>
              <Cards data={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductCard;
