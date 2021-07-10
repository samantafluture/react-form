import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import FormValidations from "../../contexts/FormValidations";
import useErrors from "../../hooks/useErrors";

function UserData({ onSubmitForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(FormValidations);
  const [errors, validateFields, fieldsAreValid] = useErrors(validations);
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (fieldsAreValid()) {
          onSubmitForm({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.password.valid}
        helperText={errors.password.text}
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}

export default UserData;
