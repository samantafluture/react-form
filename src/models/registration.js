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

function validatePassword(password) {
  if (password.length < 4 || password.length > 72) {
    return {
      valid: false,
      text: "Your password must have between 4 and 72 digits!",
    };
  } else {
    return {
      valid: true,
      text: "",
    };
  }
}

function validateName(name) {
  if (name.length < 3) {
    return {
      valid: false,
      text: "Your name is invalid!",
    };
  } else {
    return {
      valid: true,
      text: "",
    };
  }
}

export {validateTin, validatePassword, validateName};
