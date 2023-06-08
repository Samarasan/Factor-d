import { Box, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "../../hooks/useMuiStyle";

const Celebrate = () => {
  const classes = useStyles();
  return (
    <div className="mid-section mobilespace-1">
      <div className="containermid">
        <div className="rowmid">
          <h3>Reasons To Celebrate Your Euphoria & Special Moments </h3>
          <h2>With Us</h2>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            className={classes.midRowSection}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={4} md={4} className={classes.midLeft}>
              <div className="block1">
                <strong>Trendiest gifts</strong>
                <p>
                  Be the trend and sparkle the eye of your loved ones with the
                  trendiest gift items.
                </p>
              </div>
              <div className="block2">
                <strong>Delivering happiness</strong>
                <p>
                  To lighten up your and your loved ones face we put all our
                  efforts to deliver your gift on time.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <div className="spl-pro">
                <a title="factor-d">
                  <img
                    src="https://www.clickokart.com/themes/default/assets/img/scooter.jpg"
                    alt="factord"
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <div className="block3">
                <strong>Gifts for everyone</strong>
                <p>
                Sparkle the eye of every special person in your life with a gift to celebrate your relation.
                </p>
              </div>
              <div className="block4">
                <strong>100% satisfaction</strong>
                <p>
                Gifts are meant to be special thus we put our 100% effort to make your gifting experience beautiful & simple.
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Celebrate;
