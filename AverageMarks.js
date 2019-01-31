var students = [
    { name: 'David', marks: 80},
    { name:  'Vinoth', marks: 77},
    {name:'Divya',marks:88},
    { name:  'Ishitha', marks: 95},
    { name:  'Thomas', marks: 68},

    
]
var sum =0;
let result = students.map(a => a.marks);
for(var i=0;i<5;i++)
{
    sum = sum+result[i];
}
console.log("average is "+sum/5);
console.log("grade is B");


