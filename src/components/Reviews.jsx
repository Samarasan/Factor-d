import React from "react";
import { useStyles } from "../hooks/useMuiStyle";
import { Box } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
const Reviews = () => {
  const classes = useStyles();
  return (<>
    <div className={classes.reviewContainer}>
      <Box className={classes.ratingHead}>
        <h2 className={classes.ratingName}>Sam</h2>
        <div className={classes.startRating}>
          <span>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </span>
        </div>
      </Box>
      <Box sx={{textAlign:"left"}}>
        <h4>Tq so much we received our order... satisfied...</h4>
        <p style={{fontSize:"14px"}}>
          Tq so much we received our order... satisfied.... awesome wrk and
          appreciate ur effort for this... we all luved this gift...Thanks for
          creating memorable moment with this Art♡
        </p>
      </Box>
    </div>
    <div className={classes.reviewContainer}>
      <Box className={classes.ratingHead}>
        <h2 className={classes.ratingName}>Sam</h2>
        <div className={classes.startRating}>
          <span>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </span>
        </div>
      </Box>
      <Box sx={{textAlign:"left"}}>
        <h4>Tq so much we received our order... satisfied...</h4>
        <p style={{fontSize:"14px"}}>
          Tq so much we received our order... satisfied.... awesome wrk and
          appreciate ur effort for this... we all luved this gift...Thanks for
          creating memorable moment with this Art♡
        </p>
      </Box>
    </div>
    <div className={classes.reviewContainer}>
      <Box className={classes.ratingHead}>
        <h2 className={classes.ratingName}>Sam</h2>
        <div className={classes.startRating}>
          <span>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </span>
        </div>
      </Box>
      <Box sx={{textAlign:"left"}}>
        <h4>Tq so much we received our order... satisfied...</h4>
        <p style={{fontSize:"14px"}}>
          Tq so much we received our order... satisfied.... awesome wrk and
          appreciate ur effort for this... we all luved this gift...Thanks for
          creating memorable moment with this Art♡
        </p>
      </Box>
    </div>
    <div className={classes.reviewContainer}>
      <Box className={classes.ratingHead}>
        <h2 className={classes.ratingName}>Sam</h2>
        <div className={classes.startRating}>
          <span>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </span>
        </div>
      </Box>
      <Box sx={{textAlign:"left"}}>
        <h4>Tq so much we received our order... satisfied...</h4>
        <p style={{fontSize:"14px"}}>
          Tq so much we received our order... satisfied.... awesome wrk and
          appreciate ur effort for this... we all luved this gift...Thanks for
          creating memorable moment with this Art♡
        </p>
      </Box>
    </div>
    </>
  );
};

export default Reviews;
