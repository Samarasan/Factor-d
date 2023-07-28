import React from "react";
import { useStyles } from "../../hooks/useMuiStyle";
import { Box, Grid } from "@mui/material";
import factor from "../../Assets/factorD.jpg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { footerItems } from "../../components/constants";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className={classes.fbContainer}
          container
          columns={{ xs: 4, sm: 12, md: 12 }}
          sx={{ mb: "3em" ,maxWidth:'80% !important'}}
        >
          <Grid item xs={3.3} className={classes.singleProductcolumn}>
            <Box sx={{ width: "100px", height: "100px" }}>
              <img
                src={factor}
                alt="fact"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "1rem",
                color: "#fff",
                fontFamily: "Poppins Arial Helvetica sans-serif !important",
              }}
            >
              <MailOutlineIcon />
              <Box sx={{ ml: "1rem" }}>support@factorD.in</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "1rem",
                color: "#fff",
                fontFamily: "Poppins Arial Helvetica sans-serif !important",
              }}
            >
              <PhoneIcon />
              <Box sx={{ ml: "1rem" }}>+91 98765432345</Box>
            </Box>
            <Box className={classes.fbSocial}>
              <ul>
                <li><InstagramIcon sx={{fontSize:'1rem'}}/></li>
                <li><FacebookIcon sx={{fontSize:'1rem'}}/></li>
                <li><TwitterIcon sx={{fontSize:'1rem'}}/></li>
                <li><PinterestIcon sx={{fontSize:'1rem'}}/></li>
                <li><YouTubeIcon sx={{fontSize:'1rem'}}/></li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={2.5} className={classes.singleProductcolumn}>
            <Box sx={{ mb: "1rem", color: "#FFF", fontSize: "25px" }}>
              Photo to Art
            </Box>
            <ul className={classes.fbPhotolist}>
              {footerItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={2.5} className={classes.singleProductcolumn}>
          <ul className={classes.fbPhotolist} style={{marginTop:'2rem'}}>
              {footerItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={2} className={classes.singleProductcolumn}>
          <Box sx={{ mb: "1rem", color: "#FFF", fontSize: "25px" }}>
              Information
            </Box>
            <ul className={classes.fbPhotolist}>
              {footerItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
      <section className={classes.footerBottom}>
        <Box className={classes.fbContainer}>
          <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid
              item
              xs={6}
              className={classes.singleProductcolumn}
              sx={{ color: "#fff", textAlign: { xs: "center", md: "left" } }}
            >
              © 2023 Factor-D. All Rights Reserved.
            </Grid>
            <Grid item xs={6} className={classes.singleProductcolumn}>
              <ul className={classes.fbPrivacylists}>
                <li>Cancellation & Replacement</li>
                <li>Privacy Policy</li>
                <li>Terms &Conditions</li>
                <li>Site Map</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </section>
    </footer>
  );
};

export default Footer;
