import { Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductDetailAccordian from "./ProductDetailAccordian";
import SingleProductContent from "./SingleProductContent";
import { useStyles } from "../../hooks/useMuiStyle";
import { featureProducts } from "../../components/constants";

const SingleProductView = () => {
  const classes = useStyles();
  const [mediaGallery, setMediaGallery] = useState();
  const [productImage, setProductImage] = useState();
  const [state, setState] = useState(false);
  const conditionFilter = featureProducts.filter((item) => item.id == 1);
  const filteredProduct =
      featureProducts.filter((item) => item.id == 1)

  useEffect(() => {
    let media = featureProducts.slice(0, 4).filter((data) => data.imgUrl);
    setMediaGallery(media);
    setProductImage(media[0]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleThumbNail = (imgData) => {
    setState(true);
    setProductImage(imgData);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {filteredProduct.map((pr, index) => (
        <Grid
          key={index}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={classes.singleProductContainer}
        >
          <Grid item xs={6} className={classes.singleProductcolumn}>
            {productImage && (
              <Paper
                className={classes.singleProductimgSec}
                sx={{ height: "515px", display: "flex", alignItems: "center",justifyContent:'center' }}
              >
                <div>
                  <img
                    src={state ? productImage.imgUrl : pr.imgUrl}
                    alt="single product"
                    style={{ width: "100%",height:'100%',maxHeight:'30em' }}
                  />
                </div>
              </Paper>
            )}
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
            >
              {mediaGallery &&
                mediaGallery.map((data) => {
                  return (
                    <Grid item xs={6}>
                      <Paper
                        className={classes.singleProductimgSec}
                        sx={{ height: "300px" }}
                      >
                        <img
                          className={classes.singleProductimgSecChild}
                          srcSet={data.imgUrl}
                          alt="single product"
                          onClick={() => handleThumbNail(data)}
                        />
                      </Paper>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid item xs={6} className={classes.singleProductrightAllign}>
            <SingleProductContent productData={filteredProduct} />
            <ProductDetailAccordian productData={filteredProduct} />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default SingleProductView;
