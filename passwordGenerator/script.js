const passBox = document.querySelector("#passBox");
const lowercase = document.querySelector("#lowerCase");
const uppercase = document.querySelector("#upperCase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const button = document.querySelector(".genPass");
const range = document.querySelector(".range");
const passLength = document.querySelector(".passLength");
const copyIcon = document.querySelector("#copy");
const deleteIcon = document.querySelector("#delete");

lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numberString = "0123456789";
symbolsString = "~!@#$%^&*";

button.addEventListener("click", (e) => {
  passBox.value = generatePassword();
});

function generatePassword() {
  let password = "";
  let genPass = "";

  genPass += lowercase.checked ? lowerCaseLetters : "";
  genPass += uppercase.checked ? upperCaseLetters : "";
  genPass += numbers.checked ? numberString : "";
  genPass += symbols.checked ? symbolsString : "";

  for (let i = range.value; i > 0; i--) {
    password += genPass.charAt(Math.floor(Math.random() * genPass.length));
  }

  return password;
}

range.addEventListener("input", (e) => {
  passLength.innerHTML = range.value;
});

copyIcon.addEventListener("click", (e) => {
  if (passBox.value != "") {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.title = "Password Copied!";
  }
});

deleteIcon.addEventListener("click", (e) => {
  passBox.value = "";
});
