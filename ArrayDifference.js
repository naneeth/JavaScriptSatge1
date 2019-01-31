var readline = require('readline-sync');
var input1 = readline.question('enter elements for array1');
var array1 = input1.split(',');
var input2 = readline.question('enter elements for array2');
var array2 = input2.split(',');

console.log(array1);
console.log(array2);
var array = new Array();
for (var i = 0; i < array1.length; i++) {
    array[array1[i]] = true;
}
console.log(array);
for (var i = 0; i < array2.length; i++) {
    if (array[array2[i]] == 1) {
        delete array[array2[i]];
    }
    else {
        array.push(array2[i]);
    }
}

console.log(array);