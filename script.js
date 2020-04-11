// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  var passwordLength =  prompt ("How many characters would you like your password to contain?");
  if (passwordLength<8 || passwordLength>128) {
    alert("The password has to be at least 8 and maximum 128 characters")
    return
    
  }

  
  console.log (passwordText)
  
   
  
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specials = " !#%&'$()*+,-./:;<=>?@[\]^_`{|}~";
  
  var combined = uppercase + lowercase + numbers + specials
  console.log(combined)
    
   var userChoice= confirm ("Click ok to confirm including special characters");

   var userChoiceNumbers= confirm ("Click ok to confirm including numeric characters");

   var userChoiceLowercase= confirm ("Click ok to confirm including lowercase characters.");

   var userChoiceUppercase= confirm ("Click ok to confirm including uppercase characters");
  
    
  
  console.log (userChoice)
  console.log (userChoiceNumbers)
  console.log (userChoiceLowercase)
  console.log (userChoiceUppercase)
  
  var all= uppercase + lowercase + numbers + specials;

  var password = '';

  var possiblechoices = '';

  if (userChoice === true) {
    possiblechoices += specials
  }

  if (userChoiceNumbers === true) {
    possiblechoices += numbers
  }
  if (userChoiceLowercase === true) {
    possiblechoices += lowercase
  }
  if (userChoiceUppercase === true) {
    possiblechoices += uppercase
  }
  if (possiblechoices === '') {
    alert("You have to pick at least one of the criterias.")
    return 
  }
  for (var index = 0; index < passwordLength; index++) {
    console.log(index)
    password += possiblechoices[Math.floor(Math.random() * possiblechoices.length)];
    
  }
   console.log(password)
   passwordText.value = password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 