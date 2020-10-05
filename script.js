// constant password characters
const passwordChar = {
  capLet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowLet: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+{}|:",
}

// generate buttons
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// password variables
var passLength, hasCap, hasLow, hasNum, hasSymbol;
var password = "";
var newPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePass();


  passwordText.value = password;
}

function generatePass() {
  resetPasswordBox();
  generatedPassword();
  for (var i = 0; i < passLength
    ; i++) {
    password += newPassword.charAt(Math.floor(Math.random() * newPassword.length));
  }
  return password;
}

// this will prompt user to confirm character types to use for password "Capital Letters, Lowercase Letters, Numbers, Symbols."
function generatedPassword() {
  passLength = prompt("Choose password length 8-128:");
  if ((passLength<8) || (passLength> 128))
  passLength = prompt("PLEASE ENTER VALID LENGTH 8-128");

  passLength
    = parseInt(passLength
    );

  hasCap = confirm("Do you want capital letters?");
  if (hasCap) {
    newPassword += passwordChar.capLet;
  }
  hasLow = confirm("Do you want lowercase letters?");
  if (hasLow) {
    newPassword += passwordChar.lowLet;
  }
  hasNum = confirm("Do you want numbers?");
  if (hasNum) {
    newPassword += passwordChar.numbers;
  }
  hasSymbol = confirm("Do you want symbols?");
  if (hasSymbol) {
    newPassword += passwordChar.symbols;
  }
  confirmPassword();
}

// if no password characters are selected this alerts  that user must select at least one character type
function confirmPassword() {
  if ((!hasCap) &&
    (!hasLow) &&
    (!hasNum) &&
    (!hasSymbol)
  ) {
    alert("You must select at least ONE CHARACTER TYPE for password.")
  }
}

function resetPasswordBox() {
  password = "";
  newPassword = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);