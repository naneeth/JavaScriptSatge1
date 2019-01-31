var readLine =require('readline-sync');

str=readLine.question("enter the string ");
letter=readLine.question("enter the letter ");

console.log(letter_count(str,letter));

function letter_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

