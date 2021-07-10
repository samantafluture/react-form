import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function ShippingData({ onSubmitForm }) {
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ postalCode, address, number, city, state });
      }}
    >
      <TextField
        value={postalCode}
        onChange={(event) => {
          setPostalCode(event.target.value);
        }}
        id="postalCode"
        name="postalCode"
        label="Postal Code"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        id="address"
        name="address"
        label="Street Address"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        name="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        id="city"
        name="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        name="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  );
}

export default ShippingData;
