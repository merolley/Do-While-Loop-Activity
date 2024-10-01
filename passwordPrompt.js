/* reference:
https://www.w3schools.com/jsref/jsref_dowhile.asp
https://www.programiz.com/javascript/while-loop
https://www.geeksforgeeks.org/javascript-do-while-loop/  
*/

//creating a code for password input
//set correct pass
let correctPassword = "breadrolls";
let password;
//loop for the password
do {
  password = prompt("Enter your password: ");
  if (password !== correctPassword) {
    console.log("Incorrect, please try again >-<");
  }
} while (password !== correctPassword);

console.log("Access granted");

//ps sir,,this code will only run in google console ^.^