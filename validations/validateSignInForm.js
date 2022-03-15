import validator from "validator";

const validateSignInForm = (data) => {
  const errors = {};

  const { email, password } = data;

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    // eslint-disable-next-line object-shorthand
    errors: errors,
  };
};

export default validateSignInForm;