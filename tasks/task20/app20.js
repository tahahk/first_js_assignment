/*20. Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater
number of 5 and 10 is 10.").*/

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");

if(num1===num2){
    alert("The Numbers Are Equal");
}
else if(num1>num2){
    alert("The greater number between "+ num1 + " and " + num2 +" is "+ num1 );
}
else if(num1<num2){
    alert("The greater number between "+ num2 + " and " + num1 +" is "+ num2 );
}