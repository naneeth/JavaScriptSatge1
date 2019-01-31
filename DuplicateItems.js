var readline = require('readline-sync');
var input = readline.question('enter all elements of array to remove duplicates ');
var arr = input.split(',');
var set = new Set(arr);
console.log(set);