/*Write a program to take “city” name as input from user. If user
enters “Karachi”, welcome the user like this: “Welcome to city
of lights”*/


var promptInput= prompt("where do you live");
var msg;
if(promptInput === "karachi"){
   msg = "welcome" + " to " + "The City Of Lights"
 }

 else if(promptInput === "lahore"){
     msg = "welcome" + " to " + "The heart Of Pakistan"

 }


 else{
     msg = promptInput + " " + "not found"
 }
 document.write(msg);
