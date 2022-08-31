// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//ask the user how long is the password

const length = Number(prompt("How long is the password?"));

console.log(length);

if(isNaN(length)){
  alert("Please input some value!");
  return;  
}

if (length < 8 || length >128){
  alert("Please enter a length between 8 - 128.");
  return;
}

//let charset ="";

//ask if want to include
//uppercase

const includeUppercase = confirm("Do you want uppercase?");

//lowercase
const includeLowercase = confirm("Do you want Lowercase?");


//number
const includeNumber = confirm("Do you want Number?");

//special symbols
const includeSymbol = confirm("Do you want Symbol?");

//we make sure atleast on criteria is selected

if(!includeLowercase && !includeUppercase && !includeNumber && !includeSymbol) {
  alert("Please select atleast one criteria.");
  return;
}

//generate the pw

//set the charset

let charset="";

if (includeUppercase){
  charset = charset + "ABCDE";
}

if (includeLowercase){
  charset = charset + "abcde";
}

if (includeNumber){
  charset = charset + "123456";
}

if (includeSymbol){
  charset = charset + "!@#$%";
}

let password = "";

for (ii=0;ii<length;ii++) {

const randomChar = charset[Math.floor(Math.random() * charset.length)]

password = password + randomChar;

}

return password;

}

// Write password to the #password input

function writePassword(event) {
  const password = generatePassword();

if (password === undefined){
  return;
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);


