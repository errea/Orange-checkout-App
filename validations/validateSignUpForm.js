import validator from "validator";

const validateSignUpForm = (data) => {
  const errors = {};

  const { firstName, userName, email, password, passwordChck } = data;
 

  if (localStorage.users) {
    let lsUsers = localStorage.users;
    lsUsers = JSON.parse(lsUsers);
    const index1 = lsUsers.findIndex((user) => user.firstName === firstName);
    const index = lsUsers.findIndex((user) => user.userName === userName);
    const index2 = lsUsers.findIndex((user) => user.email === email);
    const index3 = lsUsers.findIndex((user) => user.password === password);
    if (index > -1) {
      errors.userName = "Username already exists!";
    }
    if (index1 > -1) {
      errors.firstName = "First name already exists!";
    }
    if (index2 > -1) {
      errors.email = "email already exists!";
    }
    if (index3 > -1) {
      errors.password = "Password already exists!";
    }
  }

  if (validator.isEmpty(firstName)) {
    errors.firstName = "FirstName field is required.";
  }

  if (validator.isEmpty(userName)) {
    errors.userName = "Username field is required.";
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