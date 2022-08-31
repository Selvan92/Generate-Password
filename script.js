// Assignment Code
var generateBtn = document.querySelector("#generate");


//ask the user how long is the password

//ask if want to include
//uppercase
//lowercase
//number
//special symbols

//generate password based on the criteias selected and length

//1. create the charset based on the criterias

//2. loop for the 'length' times, for each iterations, 

//grab a random char and append to an accumulator





//bank of chars

//abcdeABCDE1234!@#$%^

//length:6
//loop to get the random characters

//pw -- set f random characters



//return the password
























// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

