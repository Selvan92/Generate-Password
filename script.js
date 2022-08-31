// Assignment Code
var generateBtn = document.querySelector("#generate");


//ask the user how long is the password

const length = Number(prompt("How long is the password?"));

console.log(length);

if(isNaN(length)){
  alert("Please input some value!")
  return;
}

if (length < 8 || length >128){
  alert("Please enter a length between 8 - 128");
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
  alert("Please select atleast one criteria.")
  return;
}

//generate the pw

//set the charset

let charset="";

if (includeUppercase){
  Charset = charset + "ABCDE";
}

if (includeLowercase){
  Charset = charset + "abcde";
}

if (includeNumber){
  Charset = charset + "123456";
}

if (includeSymbol){
  Charset = charset + "!@#$%";
}


for (i=0,i<length;i++) {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
if (password === undefined){
  return;}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

