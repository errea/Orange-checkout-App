import validator from "validator";

const validateSignUpForm = (data) => {
  const errors = {};

  const { firstName, lastName, email, password, passwordChck } = data;
 

  if (localStorage.users) {
    let lsUsers = localStorage.users;
    lsUsers = JSON.parse(lsUsers);
  
    const emailIndex = lsUsers.findIndex((user) => user.email === email);
    const passwordIndex = lsUsers.findIndex((user) => user.password === password);
   
    if (emailIndex > -1) {
      errors.email = "email already exists!";
    }
    if (passwordIndex > -1) {
      errors.password = "Password already exists!";
    }
  }

  if (validator.isEmpty(firstName)) {
    errors.firstName = "First Name field is required.";
  }

  if (validator.isEmpty(lastName)) {
    errors.lastName = "Last Name field is required.";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  if (!validator.equals(password, passwordChck)) {
    errors.passwordChck = "Password should match!";
  }

  if (validator.isEmpty(passwordChck)) {
    errors.passwordChck = "Confirm Password field is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    // eslint-disable-next-line object-shorthand
    errors: errors,
  };
};

export default validateSignUpForm;