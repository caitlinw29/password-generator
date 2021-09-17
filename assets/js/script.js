// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
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
    generatePassword();
  } else if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        //if number is not in correct range, prompt to try again. 
        numberOfCharacters = prompt("Please choose a number between 8-128");

        //Need to revalidate everything
        if (numberOfCharacters === null) {
          return;
        } else if (!numberOfCharacters) {
          alert("You need to input a number to make a password");
          generatePassword();
        } else if (numberOfCharacters < 8 || numberOfCharacters > 128) {
          //if number is not in correct range, prompt to try again
            alert("You need to choose an appropriate number");
            generatePassword();
        } else if (lowerABC.includes(numberOfCharacters) || upperABC.includes(numberOfCharacters) || specialChar.includes(numberOfCharacters)) {
          //If user inputs a letter or special character, provide error message.
          alert("You need to use a number");
          generatePassword();
        } else {
          //Check character types
          confirmations();  
        }
  } else if (lowerABC.includes(numberOfCharacters) || upperABC.includes(numberOfCharacters) || specialChar.includes(numberOfCharacters)) {
    //If user inputs a letter or special character, provide error message.
    alert("You need to use a number");
    generatePassword();
  } else {
    //If user inputs an appropriate number, check which character types they would like to include
    confirmations();
  };

  //Confirmations to check for character types 
  function confirmations() {
    includeSC = window.confirm("Click OK to confirm including special characters.");
    includeNum = window.confirm("Click OK to confirm including numeric characters.");
    includeLowABC = window.confirm("Click OK to confirm including lowercase characters.");
    includeUpABC = window.confirm("Click OK to confirm including uppercase characters.");
  };


  //Create password array by merging character arrays with concat  
  //includes all four types in selection
  if (includeSC && includeNum && includeLowABC && includeUpABC) { 
    password = specialChar.concat(numbers, lowerABC, upperABC);

  } //include three types in selection
  else if (includeSC && includeNum && includeLowABC) {   
    password = specialChar.concat(numbers, lowerABC);       
  } else if (includeSC && includeNum && includeUpABC) {
    password = specialChar.concat(numbers, upperABC);
  } else if (includeSC && includeUpABC && includeLowABC) {
    password = specialChar.concat(lowerABC, upperABC);
  } else if (includeNum && includeUpABC && includeLowABC) {
    password = numbers.concat(lowerABC, upperABC);

  } //include two types in selection
  else if (includeNum && includeLowABC) {
    password = numbers.concat(lowerABC);
  } else if (includeNum && includeUpABC) {
    password = numbers.concat(upperABC);
  } else if (includeNum && includeSC) {
    password = numbers.concat(specialChar);
  } else if (includeUpABC && includeLowABC) {
    password = upperABC.concat(lowerABC);
  } else if (includeUpABC && includeSC) {
    password = upperABC.concat(specialChar);
  } else if (includeSC && includeLowABC) {
    password = specialChar.concat(lowerABC);

  } //includes one type in selection
  else if (includeSC) {
    password = specialChar;
  } else if (includeNum) {
    password = numbers;
  } else if (includeLowABC) {
    password = lowerABC;
  } else if (includeUpABC) {
    password = upperABC;

  } //If 4 negatives, prompt user to select at least one type
  else {
    alert("You must choose at least one type of character");
    generatePassword();
  };
  
  //Empty array for randomized password characters
  var randomPassword = []; 

  //Randomize password from password array
  for (var i = 0; i < numberOfCharacters; i++) {
    var randomize = password[Math.floor(Math.random() * password.length)];
    randomPassword.push(randomize);
    randomNoSpacePassword = randomPassword.join("");
  }

  return randomNoSpacePassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

