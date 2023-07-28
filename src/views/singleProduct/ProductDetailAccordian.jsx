import React, { useState } from "react";

//MUI
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Divider, Box, Grid } from "@mui/material";
import { useStyles } from "../../hooks/useMuiStyle";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.9rem",
          color: "black",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  border: "none",
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const ProductDetailAccordian = ({ productData }) => {
  const classes = useStyles();
  const [expandedTech, setExpandedTech] = useState(false);
  return (
    <React.Fragment>
      {productData.map((points) => (
        <Box className={classes.productDetailAccordianContainer}>
          <Accordion expanded={expandedTech}>
            <AccordionSummary onClick={() => setExpandedTech(!expandedTech)}>
              <Typography variant="h3" className={classes.accTitle}>
                Technical Specifications
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid className={classes.accordianContent}>
                <Box className={classes.acclists}>
                  <ul className={classes.productDetailacclistitems}>
                    {/* {points?.techSpecs?.map((contents) => (
                      <li className={classes.acclistTexts}>{contents}</li>
                    ))} */}

                    <li className={classes.acclistTexts}>
                      There are many variations of passages of Lorem Ipsum
                    </li>
                    <li className={classes.acclistTexts}>
                      There are many variations of passages of Lorem Ipsum
                    </li>
                    <li className={classes.acclistTexts}>
                      There are many variations of passages of Lorem Ipsum
                    </li>
                  </ul>
                </Box>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Divider sx={{ marginBottom: "25px" }} />
        </Box>
      ))}
    </React.Fragment>
  );
};

export default ProductDetailAccordian;
