var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var abcUpperArr = abcUpper.split("");

var abcLower = "abcdefghijklmnopqrstuvwxyz";

var abcLowerArr = abcLower.split("");

var num = "0123456789";

var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");



function generatePass(){
    var allChars = [];
    var resultPass = "";

    var Totlength = prompt("How many characters would you like your password to be?");

    if(Totlength <8 || Totlength > 128){
        alert("Password must be between 8 and 128 characters");
    }

// Confirm the rest of character conditions
    
    else{
        if(confirm("Would you like your password to contain upper case letters?")){
            Array.prototype.push.apply(allChars, abcUpperArr);
        }

        if(confirm("Would you like your password to contain lower case letters?")){
            Array.prototype.push.apply(allChars, abcLowerArr);
        }

        if(confirm("Would you like your password to contain numbers?")){
            Array.prototype.push.apply(allChars, numArr);
        }

        if(confirm("Would you like your password to contain symbols?")){
            Array.prototype.push.apply(allChars, symArr);
        }

        if(allChars.length===0){
            alert("You must select at lease 1 type of characters to generate a password.");
        }


// generates the password 
        else{
            for(var i=0; i<Totlength; i++){
                var random = Math.floor(Math.random()*allChars.length);
                resultPass += allChars[random];
            }
        }
        }

// displays the password 
        document.getElementById("password").innerHTML = resultPass;
   }




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
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

    var Uppercase = prompt( "Please Enter a UpperCase Letter"); 
        alert (Uppercase); 
    }

    var Special = prompt("Please Enter a Special Character"); 
        alert (Special);

    
    } 



*/ 
