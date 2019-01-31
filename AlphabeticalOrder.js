var readlineSync = require('readline-sync');

str = readlineSync.question('Enter the string ')

console.log(alphabet_order(str));

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
