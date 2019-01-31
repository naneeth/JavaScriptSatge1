var day = new Date();
var month = day.getMonth()+1;
var date  = day.getDate();
var year = day.getFullYear();
var hours = day.getHours();
var minutes = day.getMinutes();
var seconds = day.getSeconds();
if(month<10)
{
    month = "0"+month;
}
if(date<10)
{
    date = "0"+date;
}
if(minutes<10)
{
    minutes = "0"+minutes;
}
if(hours<10)
{
    hours = "0"+hours;
}
if(seconds<10)
{
    seconds = "0"+seconds;
}
console.log(month +"/"+date+"/"+year+" "+hours+":"+minutes+":"+seconds);
