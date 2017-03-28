/*5. Write a program to take input color of road traffic signal from 
the user & show the message according to this table:*/

var color = prompt("Enter traffic signal color", color);

if(color === "red"){
    document.write("vehicles must stop")
}

else if(color === "yellow"){
    document.write("yellow vehicles should get ready to move ")
}


else if(color === "green"){
    document.write("vehicles can move now")
}