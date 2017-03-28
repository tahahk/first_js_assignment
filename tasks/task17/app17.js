/*17. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user*/

var num1 = +prompt("Enter a Number", 12);
var oper = prompt("Enter a operator",'+');
var num2 = +prompt("Enter 2nd Number", 5)

if(oper == '+'){
    document.write("result: ", num1+num2);

}

else if(oper == '-'){
    document.write("result: ", num1-num2);

}

else if(oper == '*'){
    document.write("result: ", num1*num2);

}

else if(oper == '/'){
    document.write("result: ", num1/num2);

}

else if(oper == '%'){
    document.write("result: ", num1/num2*100 + "%");

}