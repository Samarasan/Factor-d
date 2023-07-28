import React, { useState, useEffect } from "react";

// MUI
import { Grid, Box, Button, styled } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const SendEnquiryForm = (props) => {
  const {setUserEnquiry,userEnquiry,products} =  props
  const classes = useStyles();
  const [userError, setUserError] = useState("");
  const handleSubmit = (event) => {
    console.log(event);
  };
  const onRegister = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserEnquiry({ ...userEnquiry, [name]: value });
  };
  const onEnqFocusEvent = () => {
    setUserError("");
  };
  useEffect(() => {
    if (userError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setUserError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userError]);
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      text: "Name",
      value: userEnquiry.name,
      validators: ["required"],
    },
    {
      id: 2,
      name: "email",
      type: "text",
      text: "E-Mail address",
      value: userEnquiry.email,
      validators: ["required", "isEmail"],
    },
    {
      id: 3,
      name: "phone",
      type: "number",
      text: "Phone Number",
      value: userEnquiry.phone,
      validators: ["required"],
    },
    {
      id: 4,
      name: "quantity",
      type: "number",
      text: "Quantity",
      value: userEnquiry.quantity,
      validators: ["required"],
    },
  ];
  const handleSendClick = async () => {
    const payload = {
      subject: "Enquiry",
      email: userEnquiry.email,
      name: userEnquiry.name,
      phone: userEnquiry.phone,
      quantity: userEnquiry.quantity,
      product: products.pName,
    };
    axios
      .post("http://localhost:8000/enquiry/mailenq", payload)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={() => null}
      id="shiipingFormValid"
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "10px !important" }}
      >
        {inputs.map((datas) => {
          return (
            <Grid item xs={12} className={classes.inputData}>
              <TextField 
                type={datas.type}
                name={datas.name}
                className={classes.inputBox}
                id={datas.id}
                value={datas.value}
                onChange={onRegister}
                onFocus={onEnqFocusEvent}
                errorMessages={["this field is required"]}
                label={datas.text}
                onKeyDown={(event) => event.stopPropagation()}
                validators={datas.validators}
                inputProps={{ min:0, pattern: '[0-9]*'}}
              />
            </Grid>
          );
        })}
      </Grid>
      <Box>
        <Button className={classes.spcartBtn} onClick={() => handleSendClick()}>
          Send
        </Button>
      </Box>
    </ValidatorForm>
  );
};

export default SendEnquiryForm;
