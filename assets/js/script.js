// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //options for password characters
  var lowerABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //array placeholder for user selected number of characters
  var password = [];

  // //randomize options
  // var randomLowABC = Math.floor(Math.random() * lowerABC.length);
  // var randomUpABC = Math.floor(Math.random() * upperABC.length);
  // var randomSC = Math.floor(Math.random() * specialChar.length);
  // var randomNum = Math.floor(Math.random() * numbers.length);

  // var finalLowABC = lowerABC[randomLowABC];
  // var finalUpABC = upperABC[randomUpABC];
  // var finalSC = specialChar[randomSC];
  // var finalNum = numbers[randomNum];

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

  function confirmations() {
    var includeSC = window.confirm("Click OK to confirm including special characters.");
    var includeNum = window.confirm("Click OK to confirm including numeric characters.");
    var includeLowABC = window.confirm("Click OK to confirm including lowercase characters.");
    var includeUpABC = window.confirm("Click OK to confirm including uppercase characters.");
  };

  
  

 

  

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
  
  
  //Create password
  

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




