import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sideslide1 from "../../Assets/Carousell/slide5.jpg";
import sideslide2 from "../../Assets/Carousell/slide6.jpg";
import slide2 from "../../Assets/Carousell/main1.jpg";
import slide3 from "../../Assets/Carousell/main2.jpg";
import slide4 from "../../Assets/Carousell/main3.jpg";
import slide1 from "../../Assets/Carousell/slide1.webp";
import { Box, Grid, Paper } from "@mui/material";
import { useStyles } from "../../hooks/useMuiStyle";

const CarouselSec = () => {
  const classes = useStyles()
  const slides = [
    {
      title: "Slide 1",
      content: slide1,
    },
    {
      title: "Slide 2",
      content: slide2,
    },
    {
      title: "Slide 3",
      content: slide3,
    },
    // {
    //   title: "Slide 4",
    //   content: slide4,
    // },
  ];
  return (
    <Box component={Paper}sx={{py:"10px",pt:"20px",boxShadow:"none !important"}}>
    <div  className={classes.carouselImgContainer}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        // sx={{ margin: "auto" }}
       
      >
        <Grid item xs={12} sm={12} md={9} className={classes.carouselLeft}>
          <Carousel autoPlay infiniteLoop showArrows>
            {slides.map((slide, index) => (
              <div key={index} className={classes.carouselMainImg}>
                <img src={slide.content} alt={slide.title} />
              </div>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.CarouselRight} sx={{display:{xs:"none",md:"block"}}}>
          <Box className={classes.sideslideImg1}> 
              <img src={sideslide1} alt='slide1' />
          </Box>
          <Box className={classes.sideslideImg2}>
              <img src={sideslide2} alt='slide2' />
          </Box>
        </Grid>
      </Grid>
    </div>
    </Box>
  );
};

export default CarouselSec;
