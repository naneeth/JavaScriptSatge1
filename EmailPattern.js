function validateEmail(emailField) {
 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if (reg.test(input) == false) {
        return false;
    }
        return true;

}

var readline = require(readline-sync);
var input = readline.question('enter email to validate');