var readline = require('readline-sync');
var input = readline.question("enter any number");
// for(var i=0;i<input.length-1;i++){
//      if(input[i]%2==0 &&input[i+1]%2==0){
//         for(var j=i+2;j<input.length+1;j++){
//          input[j]=input[i+1];
//          input.charAt[i+1]= '-';
//         }
//     }
// }

for(var i=0;i<input.length-1;i++){
    if(input[i]%2==0 &&input[i+1]%2==0){
      var prestring = input.substring(0,i+1);
      var poststring = input.substring(i+1);
      var input = prestring+"-"+poststring;
   }
}
console.log(input);