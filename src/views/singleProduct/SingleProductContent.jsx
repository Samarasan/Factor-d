import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DialogForm from "./DialogForm";
import { useStyles } from "../../hooks/useMuiStyle";

const SingleProductContent = ({ productData }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box className={classes.spcontentContainer}>
        <Typography variant="h4" className={classes.spheader}>
          {productData[0].pName}
        </Typography>
        <Box>
          <Typography variant="h4" className={classes.pText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
        <Box>
          <Button className={classes.spcartBtn} onClick={handleClickOpen}>
            Send Enquiry
          </Button>
        </Box>
      </Box>
      <DialogForm
        setOpen={setOpen}
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        productData={productData}
      />
    </div>
  );
};

export default SingleProductContent;
