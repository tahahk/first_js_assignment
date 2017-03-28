/*Write a program to take input a number from user & display
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by
default.*/

 var num = prompt("Enter number for table",5);
var num2=1;

document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++  +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++ +"<br/>");
document.write(num + 'x' + num2 + ' = ' + num*num2++);
