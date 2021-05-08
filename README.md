# Wk3-Password-Generator
Modifying starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected, featuring dynamically updated HTML and CSS powered by JavaScript code.

## Description
This project was completed after learning JavaScript and designed specifically to challenge us to use variables, arrays, prompts, conditional statements, iteration, functions, methods, and writing to the document.

The following acceptance criteria were used in the development of this web application:

* When the "Generate Password" button is clicked on the web application, the user is presented with a series of prompts for password criteria
* The user enters the criteria for the password, including the following:
    * The password length between 8 and 128 characters
    * Whether to include lowercase characters
    * Whether to include uppercase characters
    * Whether to include numeric characters
    * Whether to include special characters
* The user's answers are validated to ensure:
    * Only numbers between 8 and 128 are entered for the password length
    * At least one character type is chosen for the password
* Given the user's responses, a password is generated that meets the user's input criteria
* The generated password is displayed written on the page
* No errors should display in the console when inspected in DevTools

## Notes on Development
* I decided to use my confirm boxes to determine whether to include each character type. So, if the user selected, "Okay" for the confirmation "Would you like to include lowercase letters?", then an array of the possible lowercase characters was pushed into an empty array called chosenCharset. This was done with all character types such that after all the confirmation boxes were completed, the array chosenCharset (that was initially empty) would then include all of the possible characters the user would like to be included as possible characters in their password. In class, we discussed pushing items to an array with array.push; however, we didn't specifically talk about pushing them into an empty array or creating an empty array. So, I researched how this is done and consulted W3Schools and MDN Web Docs for how to create an empty array and push other arrays into it. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) (https://www.w3schools.com/js/js_arrays.asp)

* I noticed that when my web appication deploys on my phone, my prompts include a "Disable prompts" option, which, when selected, renders my password generator unusuable. After talking with the instructor, Jim, the appearance of that option is out of our control and down the line we'd be using other methods than prompts to handle these inputs, so to not worry about it for now.

## Mock-Up

The following image shows the web application's appearance and functionality:

![Demo video of password generator](https://github.com/merewall/Wk3-Password-Generator/blob/main/Assets/Images/password-generator-demo.gif)    

## Deployed Application Link

The deployed GitHub page for this web application can be found: 
https://merewall.github.io/Wk3-Password-Generator/

The GitHub repository for this web application can be found:
https://github.com/merewall/Wk3-Password-Generator