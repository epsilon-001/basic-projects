const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");
const submitForm = document.querySelector("#submitForm");
const eyeIcon = document.querySelector("#eyeIcon");

fullName.addEventListener("click", (e) => {
  e.target.nextElementSibling.innerHTML = "";
  e.target.parentElement.lastElementChild.innerHTML = "";
});
email.addEventListener("click", (e) => {
  e.target.nextElementSibling.innerHTML = "";
  e.target.parentElement.lastElementChild.innerHTML = "";
});
password.addEventListener("click", (e) => {
  e.target.nextElementSibling.innerHTML = "";
  e.target.parentElement.lastElementChild.innerHTML = "";
});

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  checkFullName();
  validateEmail();
  validatePassword();
  if (checkFullName() && validateEmail() && validatePassword()) {
    alert("Form Submitted Successfully.");
  }
});

eyeIcon.addEventListener("click", (e) => {
  if (e.target.innerHTML == "visibility_off") {
    password.type = "type";
    e.target.innerHTML = "visibility";
  } else {
    password.type = "password";
    e.target.innerHTML = "visibility_off";
  }
});

function checkFullName() {
  if (fullName.value === "") {
    nameError.innerHTML = "Name Required";
    nameError.previousElementSibling.innerHTML = "close";
    return false;
  }

  if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(fullName.value)) {
    nameError.innerHTML = "Full Name Required";
    nameError.previousElementSibling.innerHTML = "close";
    return false;
  }

  nameError.innerHTML = "";
  nameError.previousElementSibling.innerHTML = "check";
  return true;
}

function validateEmail() {
  if (email.value === "") {
    emailError.innerHTML = "Email Required";
    emailError.previousElementSibling.innerHTML = "close";
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailError.innerHTML = "Enter Valid Email";
    emailError.previousElementSibling.innerHTML = "close";
    return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.innerHTML = "check";
  return true;
}

function validatePassword() {
  let passwordValue = password.value;

  if (passwordValue === "") {
    passError.innerHTML = "Password is required";
    passError.previousElementSibling.innerHTML = "close";
    return false;
  }

  if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(
      passwordValue
    )
  ) {
    passError.innerHTML =
      "Password should contain atleast 1 Uppercase, 1 Lowercase, 1 Digit & 1 Special Character";
    password.nextElementSibling.innerHTML = "close";
    return false;
  }
  passError.innerHTML = "";
  password.nextElementSibling.innerHTML = "check";
  return true;
}
