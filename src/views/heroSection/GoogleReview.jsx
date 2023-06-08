import React from "react";
import { useStyles } from "../../hooks/useMuiStyle";
import { Box, Grid } from "@mui/material";
import fb from "../../Assets/social/fb.svg"
import google from "../../Assets/social/google.svg"
import StarRateIcon from '@mui/icons-material/StarRate';
import Reviews from "../../components/Reviews";
const GoogleReview = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: "2rem 0rem" }}>
      <div className="gRevviewHeader">
        <h2>
          <span>10000 +</span>HAPPY CUSTOMERS
        </h2>
        <Box sx={{ flexGrow: 1 }} className={classes.reviewAlign}>
          <Grid
            container
            className={classes.midRowSection}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={5}
              className={classes.gReviewPartLeft}
            >
              <Box sx={{textAlign:"left"}}>
                <h2 className={classes.grVLeftHeader}>Factor-D</h2>
                <span>Since 2010</span>
                <p>
                  Buttistore has served over 2 Lakh happy customers since 2010.
                  Read what they said about Buttistore's digital and hand-made
                  artwork. Check Buttistore reviews on Google, Facebook and
                  Google Play Store.
                </p>
              </Box>
              <Box className={classes.socialImg}>
                <img src={fb} alt='fb'/>
                <img src={google} alt='google'/>
              </Box>
              <Box>
                <h3 className={classes.ratingsNum}>
                    4.9<span>/5</span>
                </h3>
                <Box className={classes.startRating}>
                    <span><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /></span>
                    <span style={{color:"black"}}>700 Reviews</span>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={7}
              className={classes.gReviewPartRight}
            >
                <Reviews />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default GoogleReview;
