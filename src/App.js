import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <RegistrationForm onSubmitForm={onSubmitForm} validateTin={validateTin} />
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

function validateTin(tin) {
  if (tin.length !== 11) {
    return {
      valid: false,
      text: "Your TIN Number must have 11 (eleven) digits!",
    };
  } else {
    return {
      valid: true,
      text: "",
    };
  }
}

export default App;
