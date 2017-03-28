/*23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog".
Run the program for a few different inputs and show the result
to make sure it works.*/

var num = +prompt("Enter a Number");
var noun= prompt("Enter a Noun");

if (num <= 1){
    alert(num+" "+ noun);
}
else {
    alert(num+ " " + noun+"s")
}