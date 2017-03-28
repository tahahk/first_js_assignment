/*16. Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/

var temp = +prompt("Enter Temperature In Degree Celcius");
if (temp>=40){
    document.write("It is too hot outside");
}
else if (temp >= 30 && temp <=39 ){
    document.write("The Weather today is Normal.");
}
else if (temp >= 20 && temp<=29 ){
    document.write("The Weather today is Cool.");
}
else if (temp <= 19  ){
    document.write("OMG! Today’s weather is so Cool.");
}