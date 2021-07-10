import React, { useState, useContext } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import FormValidations from "../../contexts/FormValidations";
import useErrors from "../../hooks/useErrors";

function PersonalData({ onSubmitForm }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tin, setTin] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  const validations = useContext(FormValidations);

  const [errors, validateFields, fieldsAreValid] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (fieldsAreValid()) {
          onSubmitForm({ name, surname, tin, promotions, newsletter });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.name.valid}
        helperText={errors.name.text}
        id="name"
        name="name"
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
        name="surname"
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
        onBlur={validateFields}
        error={!errors.tin.valid}
        helperText={errors.tin.text}
        id="tin"
        name="tin"
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
        Next
      </Button>
    </form>
  );
}

export default PersonalData;
