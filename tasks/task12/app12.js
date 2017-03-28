/*12. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3.*/

var num = +prompt("Enter Number To See If It's Divisible By 3");

if(num%3==0){
    document.write("The Number Is Divisible By 3")
}
else{
    document.write("Not Divisible By 3");
}