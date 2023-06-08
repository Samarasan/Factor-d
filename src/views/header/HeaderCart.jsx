import React,{useState} from "react";

//MUI
import {
  Box,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStyles } from "../../hooks/useMuiStyle";
//Hooks

const HeaderCart = ({icon,content,style}) => {
  const classes = useStyles()
  return (
    <React.Fragment>
    <Box className={classes.locationConatiner} sx={{display:{xs:'none',sm:'none',md:'flex'}}}>
        {icon}
      <Box className={classes.locationWrap}>
        <span className={classes.locationAddress}>{content}</span>
      </Box>
    </Box>
   </React.Fragment>
  );
};

export default HeaderCart;