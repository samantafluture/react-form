import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function RegistrationForm({ onSubmitForm, validateTin }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tin, setTin] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [errors, setErrors] = useState({ tin: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ name, surname, tin, promotions, newsletter });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        label="First Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
        ƒ
        id="surname"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={tin}
        onChange={(event) => {
          setTin(event.target.value);
        }}
        onBlur={(event) => {
          const isValid = validateTin(tin);
          setErrors({ tin: isValid });
        }}
        error={!errors.tin.valid}
        helperText={errors.tin.text}
        id="tin"
        label="TIN Number"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promotions"
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            name="promotions"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Newsletter"
        control={
          <Switch
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
            name="promotions"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default RegistrationForm;
