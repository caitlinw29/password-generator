// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //options for password characters
  var lowerABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = ["\ ", "\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //Prompt for number of characters in password
  var numberOfCharacters = window.prompt("How many characters would you like your password to contain? Choose between 8-128");

  //if number is not in correct range, prompt to try again
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    window.alert("Please choose a number between 8-128");
    window.prompt("How many characters would you like your password to contain? Choose between 8-128");
  } 

  //Check which characters the user would like to include
  var includeSC = window.confirm("Click OK to confirm including special characters.");
  var includeNum = window.confirm("Click OK to confirm including numeric characters.");
  var includeLowABC = window.confirm("Click OK to confirm including lowercase characters.");
  var includeUpABC = window.confirm("Click OK to confirm including uppercase characters.");
}

