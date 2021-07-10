import React from "react";
import "./App.css";
import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import FormValidations from "./contexts/FormValidations";
import {
  validateTin,
  validatePassword,
  validateName,
} from "./models/registration.js";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Registration Form
      </Typography>
      <FormValidations.Provider
        value={{
          tin: validateTin,
          password: validatePassword,
          name: validateName,
        }}
      >
        <RegistrationForm onSubmitForm={onSubmitForm} />
      </FormValidations.Provider>
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
