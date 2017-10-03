var date1 = prompt("Enter your first date YY,MM,DD");
var date2 = prompt("Enter your second date YY,MM,DD");
var a = new date(date1);
var b = new date(date2);
var c = a-b;
var day = Math.floor(c/(1000*60*60*24));
var months = day/30;
var years = months/12;
console.log("The number of days between the first and second dates is "+day);
console.log("The number of months between "+months);
console.log("The number of years between the first date and the second is "+years);

