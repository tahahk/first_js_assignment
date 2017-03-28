/*4. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma’am.*/


var promptInput = prompt("Enter your gender",promptInput);
if(promptInput === "male"){
    document.write("Hello Sir")
}

else if(promptInput === "female")
{
    document.write("Hello Ma'am");
}

else {
    alert("Invalid Input");
}