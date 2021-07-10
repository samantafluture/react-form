import React from "react";

const FormValidations = React.createContext({
  tin: noValidatian,
  password: noValidatian,
  name: noValidatian,
});

function noValidatian(data) {
    console.log(data);
    return {valid: true, text: ""}
}

export default FormValidations;

