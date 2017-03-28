/*18. Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”.*/



var promptInput = prompt("Input Day Name");

if (promptInput=="monday"||promptInput=="tuesday"||promptInput=="wednesday"||promptInput=="thursday"||promptInput=="friday"){
    alert("It’s a week Day");
}
else if (promptInput=="saturday"){
    alert("It’s a Week End");
}

else if (promptInput=="sunday"){
    alert("It’s a Holiday");
}