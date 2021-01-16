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


function promptMe(){ 
    var length = prompt( " Select Length of Passwprd between 8 and 128 Characters")
    alert (length); 
    
    var Lowercase = prompt( "Please Enter a LowerCase Letter"); 
    alert (Lowercase); 
        //let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
    var Uppercase = prompt( "Please Enter a UpperCase Letter"); 
    alert (Uppercase); 
        //let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','W','Y','Z']; 

    var Number = prompt("Please Enter a Number"); 
    alert (Number); 
        //let Number = [1,2,3,4,5,6,7,8,9,]

    var specialCharacter = prompt("Please Enter a Special Character"); 
    alert (specialCharacter); 
}

