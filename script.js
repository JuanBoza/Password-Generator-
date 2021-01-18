




function passwordPromtps() { 
 
    var length = parseInt( 
        prompt ('Please Select a Length between 8 and 128 characters')); 
 
    if (isNaN(length) === true) {  
        alert ('Length of password must be a number'); 
        return; 
    }
    if (length < 8 ) { 
        alert('Password must be greater than seven, Click Generate Password to try again'); 
        return; 
    }

    if (length > 128) { 
        alert('Password must be less than 129, Click Generate Password to try again'); 
        return;
    }

    var Lowercase = prompt( "Please Enter a LowerCase Letter"); 
    alert (Lowercase); 
        var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
    var Uppercase = prompt( "Please Enter a UpperCase Letter"); 
    alert (Uppercase); 
        var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','W','Y','Z']; 

    var Number = prompt("Please Enter a Number"); 
    alert (Number); 
        var Number = ['1','2','3','4','5','6','7','8','9']; 

    var specialCharacter = prompt("Please Enter a Special Character"); 
    alert (specialCharacter); 
        var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=']; 
    


var Password = { 
    length: length, 
    Lowercase: Lowercase, 
    Uppercase: Uppercase, 
    Number: Number, 
    specialCharacters: specialCharacters, 
    }; 

    return Password; 

}








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

