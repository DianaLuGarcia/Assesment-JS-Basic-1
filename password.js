/*Create a new file called password.js. Write a program that does the following:

Welcome the user to the password validator tool
Prompt the user for a password to validate
Check if the user’s password meets the following constraint:
At least 10 characters long
If the user’s password meets the constraint, show a success message to the user
If the user’s password fails the constraint, show a failure message to the user
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Password Validator!')
console.log('* Password must be over 10 characters long ' +
'and include at-least 1 number')

reader.question("Enter a password to validate:  ", function(input){
	userPass = input;

//length
  if (userPass.length < 10){
    console.log('Password is too short!');
  }else if (userPass >= 10) {
    console.log('Password is valid!')
  }

// This line closes the connection to the command line interface.
reader.close()

});
