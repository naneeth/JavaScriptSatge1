var readline = require('readline-sync');
var largest = 0;
var count = 0;
while(count<5){
    var num = readline.question("enter number "+count+" ");
    if(num>largest){
        largest = num;
    }
    count++;
}
console.log(largest);
