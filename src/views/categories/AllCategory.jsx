import React from "react";
import img from "../../Assets/Carousell/main1.jpg";
import { Box, Grid,Divider } from "@mui/material";
import { categories } from "../../components/constants";
import ProductCard from "../../components/cards/ProductCard";
import { useStyles } from "../../hooks/useMuiStyle";
import BreadCrumps from "../../components/BreadCrumps";

const AllCategory = () => {
  const classes = useStyles();
  return (
    <div>
      <BreadCrumps img={img} />
      <Box>
        <span className={classes.allProductsHeading}>Categories
        <Divider className={classes.divider} sx={{borderColor:"#008f6a !important", backgroundColor:"#008f6a !important"}}/>
        </span>
       
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          //className={classes.cardContainer}
        >
          {categories.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} sx={{display:"flex",allignItems:"center",justifyContent:"center"}} >
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default AllCategory;
