var readline = require('readline-sync');
var input1 = readline.question('enter elements for array1');
var array1 = input1.split(',');
var input2 = readline.question('enter elements for array2');
var array2 = input2.split(',');
let difference = array1.filter(x => !array2.includes(x)).concat(array2.filter(x => !array1.includes(x)));