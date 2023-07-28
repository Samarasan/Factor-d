import Reac, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Grid, Box, Typography, Divider } from "@mui/material";
import logo from "../../Assets/factorD.jpg";
// import SendEnquiryForm from "./SendEnquiryForm";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useStyles } from "../../hooks/useMuiStyle";
const InitailEnqReg = {
  name: "",
  email: "",
  phone: "",
  quantity: "",
};

const DialogForm = (props) => {
  const { open, handleClose, productData } = props;
  const classes = useStyles();
  const [userEnquiry, setUserEnquiry] = useState(InitailEnqReg);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <Dialog  fullScreen={fullScreen} maxWidth={'md'}
        className={classes.dialogBox}
        sx={{margin:{xs:"10px",md :"0px"}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Grid
          container
          className={classes.modalContainer}
          sx={{ display: { xs: "block", md: "flex" } ,padding:{xs:'10px',md:'5px'}}}
        >
          <Grid container className={classes.sippingContainer}>
            <Box className={classes.modalheader}>
              <img
                className={classes.checkOutlogo}
                src={logo}
                alt="sanboxlogo"
              />
            </Box>
            <Box>
              <Box className={classes.stepperContainer}>
                {/* {productData.map((products) => (
                  <SendEnquiryForm
                    products={products}
                    setUserEnquiry={setUserEnquiry}
                    userEnquiry={userEnquiry}
                  />
                ))} */}
              </Box>
            </Box>
          </Grid>
          <Grid
            container
            className={classes.summaryContainer}
            sx={{ display: { xs: "block !important", md: "block !important" } }}
          >
            <Box className={classes.alignment}>
              <Grid>
                {productData.map((items) => {
                  return (
                    <Box className={classes.checkSummarylistItems}>
                      <Box className={classes.checkSummarylistDetails}>
                        <Typography
                          variant="h4"
                          className={classes.checkSummaryitemName}
                        >
                          {items.pName}
                        </Typography>
                      </Box>
                      <Box className={classes.listImg}>
                        <img
                          src={items.imgUrl}
                          alt="cartimg"
                          style={{ width: "100%" }}
                        />
                      </Box>
                      <Box className={classes.checkSummarylistQty}>
                        Quantity: &nbsp;{" "}
                        {userEnquiry.quantity ? (
                          <> {userEnquiry.quantity} No's </>
                        ) : (
                          <> 0 </>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Grid>
              <Divider />
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default DialogForm;
