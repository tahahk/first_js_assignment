/*13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B)*/


var team1 = prompt("Enter Name Of Team 1");
var score1 = +prompt("Enter Score Of Team 1");
var team2 = prompt("Enter Name Of Team 2");
var score2 = +prompt("Enter Score Of Team 2");

if(score1>score2){
    alert(team1 +" Has Won")
}

else if(score1<score2){
    alert(team2 +" Has Won")
}

else if(score1==score2){
    alert("Match Tied")
}