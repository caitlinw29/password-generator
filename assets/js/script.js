var generateBtn = document.querySelector("#generate");
//options for password characters
var specialChar = ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Initialize confirmation variables
var includeSC;
var includeNum;
var includeLowABC;
var includeUpABC;


//Confirmations to check for character types 
function confirmations() {
  includeSC = window.confirm("Click OK to confirm including special characters.");
  includeNum = window.confirm("Click OK to confirm including numeric characters.");
  includeLowABC = window.confirm("Click OK to confirm including lowercase characters.");
  includeUpABC = window.confirm("Click OK to confirm including uppercase characters.");
};

function generatePassword() {
  //array placeholder for user selected number of characters
  var password = [];
  //Prompt for number of characters in password
  var numberOfCharacters = prompt("How many characters would you like your password to contain? Choose between 8-128");

  //Validation for numberOfCharacters
  if (numberOfCharacters === null) {
    //If user hits cancel, exit the generator
    return;
  } else if (!numberOfCharacters) {
    //If user hits okay without typing anything, prompt to provide a number
    alert("You need to input a number to make a password");
    return;
  } else if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        //if number is not in correct range, prompt to try again. 
        alert("Please choose a number between 8-128");
        return;
  } else if (lowerABC.includes(numberOfCharacters) || upperABC.includes(numberOfCharacters) || specialChar.includes(numberOfCharacters)) {
    //If user inputs a letter or special character, provide error message.
    alert("You need to use a number");
    return;
  } else {
    //If user inputs an appropriate number, check which character types they would like to include
    confirmations();
  };

  //Create Randomized Password
  //Empty array for randomized password characters
  var randomPassword = []; 
  //count set to zero
  var count = 0;
  //if a type was selected, add one to the count and add one random character from that array to the randomPassword array
  if (includeSC) {
    count ++;
     //If a character type is selected, at least one character from that type will be in the password
    var randomSpecial = specialChar[Math.floor(Math.random() * specialChar.length)];
    randomPassword.push(randomSpecial);
    //push the character type into the password array
    password.push(...specialChar);
  }
  if (includeNum) {
    count ++;
    var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    randomPassword.push(randomNum);
    password.push(...numbers);
  }
  if (includeLowABC) {
    count ++;
    var randomLowABC = lowerABC[Math.floor(Math.random() * lowerABC.length)];
    randomPassword.push(randomLowABC);
    password.push(...lowerABC);
  }
  if (includeUpABC) {
    count ++;
    var randomUpABC = upperABC[Math.floor(Math.random() * upperABC.length)];
    randomPassword.push(randomUpABC);
    password.push(...upperABC);
  }
  //if no choice, alert to choose at least one character type
  if (!includeUpABC && !includeLowABC && !includeNum && !includeSC) {
    alert("You must choose at least one type of character");
    return;
  }

  //Randomize password from password array
  //'numberOfCharacters - count' will account for the characters added to make sure each type is represented
  for (var i = 0; i < numberOfCharacters - count; i++) {
    var randomize = password[Math.floor(Math.random() * password.length)];
    randomPassword.push(randomize);
    //Join will take out the commas that separate each character
    randomNoSpacePassword = randomPassword.join("");
  };
  
  //returns the randomized password to be used
  return randomNoSpacePassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to "generate" button
generateBtn.addEventListener("click", writePassword);