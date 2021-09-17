// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //options for password characters
  var lowerABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //randomize options
  var randomLowABC = Math.floor(Math.random() * lowerABC.length);
  var randomUpABC = Math.floor(Math.random() * upperABC.length);
  var randomSC = Math.floor(Math.random() * specialChar.length);
  var randomNum = Math.floor(Math.random() * numbers.length);

  var finalLowABC = lowerABC[randomLowABC];
  var finalUpABC = upperABC[randomUpABC];
  var finalSC = specialChar[randomSC];
  var finalNum = numbers[randomNum];

  //Prompt for number of characters in password
  var numberOfCharacters = prompt("How many characters would you like your password to contain? Choose between 8-128");

  //If user hits cancel, exit the generator
  while (numberOfCharacters === null) {
    return;
  }

  //if number is not in correct range, prompt to try again
  // if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  //   numberOfCharacters = prompt("Please choose a number between 8-128");
  //   // window.prompt("How many characters would you like your password to contain? Choose between 8-128");
  // } 
  do {
    numberOfCharacters = prompt("Please choose a number between 8-128");
  } while (
    numberOfCharacters < 8 || numberOfCharacters > 128
    );

  //Check which character types the user would like to include
  var includeSC = window.confirm("Click OK to confirm including special characters.");
  var includeNum = window.confirm("Click OK to confirm including numeric characters.");
  var includeLowABC = window.confirm("Click OK to confirm including lowercase characters.");
  var includeUpABC = window.confirm("Click OK to confirm including uppercase characters.");

  var password = [];

  function addCharacters() {
    //includes all four types
    if (includeSC && includeNum && includeLowABC && includeUpABC) {
      password.push(finalSC);
      password.push(finalNum); 
      password.push(finalLowABC); 
      password.push(finalUpABC);
    } //include 3 types
      else if (includeSC && includeNum && includeLowABC) {
        return finalNum;
    } else if (includeSC && includeNum && includeUpABC) {
        return finalLowABC;
    } else if (includeSC && includeUpABC && includeLowABC) {

    } else if (includeNum && includeUpABC && includeLowABC) {

    } //include 2 types
      else if (includeNum && includeLowABC) {

    } else if (includeNum && includeUpABC) {
      
    } else if (includeNum && includeSC) {
      
    } else if (includeUpABC && includeLowABC) {
      
    } else if (includeUpABC && includeSC) {
      
    } else if (includeSC && includeLowABC) {
      
    } else if (includeSC) {

    } else if (includeNum) {
      
    } else if (includeLowABC) {
      
    } else if (includeUpABC) {
      
    } else {
      password.push("Please try again and select at least one character type.")
    }
  }
  
  //Create password
  var i = 0;
  do {
     addCharacters();
  }
  while (password.length < numberOfCharacters);

  //Randomize password
  //Shuffle the existing characters
  function shuffle(password) {
    let currentIndex = password.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [password[currentIndex], password[randomIndex]] = [
        password[randomIndex], password[currentIndex]];
    }
    //Use join to take the commas away from the return
    var noCommasPass = password.join('');
    return noCommasPass;
  }
  
  randomPassword = shuffle(password);
  return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




