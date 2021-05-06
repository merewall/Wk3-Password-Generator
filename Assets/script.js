// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // Creating a prompt to set the number of characters in the password
  let passwordLength = prompt("How many characters do you want in the password? (Enter a number between 8 and 128)");

  // Validating employee input to ensure the password length is between 8 and 128 characters and a number
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength*1)) {
    alert("Please start again and enter a number between 8 and 128.");
    location.reload();
    return
  } else {
      // Set the variable passwordLength to a number datatype to use later to reference an array length
      passwordLength = (passwordLength*1);
    }
  
  // Create pop-up confirmation boxes for the employee to select which character types they want in the password
  let lowerAnswer = confirm("Do you want to use some lowercase characters?");
  let upperAnswer = confirm("Do you want to use some uppercase characters?");
  let numericAnswer = confirm("Do you want to use numerical characters?");
  let specialAnswer = confirm("Do you want to use special characters?");

  // Make sure employee selects at least one character type, and if not, reload page to re-set prompts/generator
  if (lowerAnswer == false && upperAnswer == false && numericAnswer == false && specialAnswer == false) {
    alert("Please start again and choose at least one set of character types.");
    location.reload();
  }

  // Create arrays of each set of character types for employee to elect into the password
  // Consulted (https://w3schools.sinsixx.com/js/js_special_characters.asp.htm#:~:text=In%20JavaScript%20you%20can%20add,by%20using%20the%20backslash%20sign) for how to put special characters into strings
  const lowerCharset = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const upperCharset = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numCharset = ['0','1','2','3','4','5','6','7','8','9']
  const specCharset = [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','\.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']

  // Create an array of characters combining lowercase, uppercase, numeric and/or special characters
  // based on the employee's inputs to the prompts.
  // The resulting array will be used as the character set from which a random character will be generated
  // Consulted W3Schools and MDN Web Docs for how to create an empty array and push other arrays into it
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  //https://www.w3schools.com/js/js_arrays.asp
  
  const chosenCharset = new Array();
  if (lowerAnswer == true) {
    chosenCharset.push.apply(chosenCharset, lowerCharset)
  }
  if (upperAnswer == true) {
    chosenCharset.push.apply(chosenCharset, upperCharset)
  }
  if (numericAnswer == true) {
    chosenCharset.push.apply(chosenCharset, numCharset)
  }
  if (specialAnswer == true) {
    chosenCharset.push.apply(chosenCharset, specCharset)
  }
  
  // Creating a function that generates a random number and reassigns it as a character from the chosenCharset
  function generateCharacter () {

    // creating a random number
    let random = Math.random()

    // reassign the random number with a character from the chosenCharset
    for (i = 0; i < chosenCharset.length; i++) {
      if (random > (i/chosenCharset.length) && random < ((i + 1)/chosenCharset.length)) {
        // console.log(chosenCharset[i]);
        return chosenCharset[i];
      }
    }
  }

  // Creating a new array for which to input the generated random characters
  // The array length is the same as the employee's original input to the prompt for passwordLength
  let passwordArray = new Array(passwordLength);

  // Input the randomly generated characters into the array items over the length of the array
  for (n = 0; n < passwordArray.length; n++) {
    passwordArray[n] = generateCharacter();
  }

  // Creating an empty string variable for which to concatanate the items in the passwordArray
  let securePassword = "";

  // Concatanate the randomly generated characters from the array into a password variable
  for (x = 0; x < passwordArray.length; x++) {
    securePassword = securePassword + passwordArray[x];
  }

  // Creating a variable that selects and inputs onto the webpage at the #password box
  let passwordText = document.querySelector("#password");

  // Setting the value of the generated password to the 
  passwordText.value = securePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);