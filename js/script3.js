

      // Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var Chars = prompt("How many characters would you like your password to contain?");
      if (Chars <= 7) {
        alert("Must be at least 8 characters!");
        writePassword();
      }
       if (Chars >= 129) {
        alert("Must be less than 128 characters!");
        writePassword();
      };

    

    var specialChar = confirm("click OK to confirm including special characters");
    
    var numericChar = confirm("click OK to confirm including numeric characters");
    var lowerChar = confirm("click OK to confirm including lower case characters");
    var upperChar = confirm("click OK to confirm including upper case characters");

  var password = generatePassword(lowerChar, upperChar, specialChar, numericChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
}

function generatePassword(needsLower, needsUpper, needsSpecial, needsNumeric) {
    var length = 8
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var specialCharacters = "!@#$%^&*()_+?><:"
    var numericCharacters = "0123456789"

    var charset = "";
    if (needsLower) {
        charset = charset.concat(lowerCase);
    }

    if (needsUpper) {
        charset = charset.concat(upperCase);
    }

    if (needsSpecial) {
        charset = charset.concat(specialCharacters);
    }
    if (needsNumeric) {
        charset = charset.concat(numericCharacters);
    }

    console.log(charset);
    retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function copyToClipboard() {

    document.getElementById("display").querySelector();

    document.execCommand("copy");

    alert("Password copied to clipboard!");

  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
