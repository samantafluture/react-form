import React, { useState, useEffect } from "react";
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import ShippingData from "./ShippingData";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function RegistrationForm({ onSubmitForm }) {
  const [currentForm, setCurrentForm] = useState(0);
  const [collectedData, setData] = useState({});

  useEffect(() => {
    if (currentForm === forms.length - 1) {
      onSubmitForm(collectedData);
    }
  });

  const forms = [
    <UserData onSubmitForm={getData} />,
    <PersonalData onSubmitForm={getData} />,
    <ShippingData onSubmitForm={getData} />,
    <Typography variant="h5">Thank you for registering!</Typography>,
  ];

  function getData(data) {
    setData({ ...collectedData, ...data });
    nextForm();
  }

  function nextForm() {
    setCurrentForm(currentForm + 1);
  }

  return (
    <>
      <Stepper activeStep={currentForm}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipping</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalize</StepLabel>
        </Step>
      </Stepper>
      {forms[currentForm]}
    </>
  );
}

export default RegistrationForm;
