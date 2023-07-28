import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "../hooks/useMuiStyle";

const BreadCrumps = ({img}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      rowSpacing={1}
      sx={{ display: { xs: "flex", sm: "flex", md: "flex" },padding:"0" ,marginTop:"0px !important"}}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      className={classes.menuContainer}
    >
      <img src={img} alt="breadcrums"  />
    </Grid>
  );
};

export default BreadCrumps;
