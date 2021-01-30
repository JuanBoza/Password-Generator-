var enter; 
var confirmNumber; 
var confirmSpecial; 
var confirmUppercase; 
var confirmLowercase; 

number = ['1','2','3','4','5','6','7','8','9']; 

special = ['!','@','#','$','%','^','&','*','(',')','_','-','+','='];

Uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','W','Y','Z']; 

Lowercase =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function passwordPrompts() { 

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





var password = []; 


for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
    } 

    var ps = password.join("");
    UserInput(ps);
    return ps;
} 

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

  








/*function passwordPrompts() { 
 

    // code works and properly checks for length of password 

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

    // code works and properly checks for length of password 

    let Lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let input = document.querySelector("input")

    input.addEventListener("change", validate); 

    
function validate(){
    // Check the lower case version of the input against the lower case values in the array
    if(values.indexOf(input.value.toLowerCase()) === -1){
      alert(input.value + " is invalid!");
      input.classList.add("invalid");  // Attachh the invalid class
    } else {
      input.classList.remove("invalid");  // Remove the invalid class
    }
  


    

    // Set up a change event callback for the input
    //input.addEventListener("change", validate);

    function validate(){
    // Check the lower case version of the input against the lower case values in the array
    if(values.indexOf(input.value.Lowercase()) === -1){
    alert(input.value + " is invalid!");
    input.classList.add("invalid");  // Attachh the invalid class
  } else {
    input.classList.remove("invalid");  // Remove the invalid class
  }
}

    // prompts work and accept input 
        //make input limited to object in array 
    
    var Uppercase = prompt( "Please Enter a UpperCase Letter"); 
    alert (Uppercase); 
        var Uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','W','Y','Z']; 

    var Number = prompt("Please Enter a Number"); 
    alert (Number); 
        var Number = ['1','2','3','4','5','6','7','8','9']; 

    var specialCharacter = prompt("Please Enter a Special Character"); 
    alert (specialCharacter); 
        var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=']; 
    


var passwordInputs = { 
    length: length, 
    Lowercase: Lowercase, 
    Uppercase: Uppercase, 
    Number: Number, 
    specialCharacters: specialCharacters, 
    }; 

    return passwordInputs; 

}

function newPassword(arr) { 
    var randIndex = Math.floor(Math.random() * arr.length); 
    var randElement = arr[randIndex]; 

    return randElement; 
}

function randomPassword() { 
    var options = passwordPrompts(); 

    var result = []; 

    var length = [];  
    
    var Lowercase = []; 

    var Uppercase = []; 

    var Number = []; 

    var specialCharacters = []; 





    return result.join(''); 
    } 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = randomPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 

const resultEl = document.getElementById('result'); 
const lengthEl = document.getElementById('length'); 
const uppercaseEl = document.getElementById('uppercase'); 
const lowercaseEl = document.getElementById('lowercase'); 
const numbersEl = document.getElementById('numbers'); 
const symbolsEl = document.getElementById('symbols'); 
const generateEl = document.getElementById('generate'); 
const clipboardEl = document.getElementById('clipboard'); 


const randomFunc = { 
    lower: getRandomLower, 
    upper: getRandomUpper, 
    number: getRandomNumber, 
    symbol: getRandomSymbol
}; 

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value; 
    const hasLower = lowercaseEl.checked; 
    const hasUpper = uppercaseEl.checked; 
    const hasNumber = numbersEl.checked; 
    const hasSymbol = symbolsEl.checked; 

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
  ); 
});  





// generator functaions  
function generatePassword(lower,upper,number,symbol,length) { 


}

function getRandomLower() { 
    return String.fromCharcode(Math.floor(Math.random() * 26) + 97); 
}

function getRandomUpper() { 
    return String.fromCharcode(Math.floor(Math.random() * 26) + 65); 
} 


function getRandomNumber() { 
    return String.fromCharcode(Math.floor(Math.random() * 10) + 48); 
}


function getRandomSymbol() { 
    const symbol = '!@#$%^&*('
    return symbols[Math.floor(Math.random() * symbols.length)]; 
*/ 