

/*9. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute grade as
per following table*/

var math = +prompt("Enter marks obtained in mathematics: ");
var phy = +prompt("Enter marks obtained in physics: ");
var chem = +prompt("Enter marks obtained in chemistry: ");
var ttlMrks = +prompt("Enter total marks: ");
var marksObtnd = math + phy + chem;
var percentage = (marksObtnd/ttlMrks)*100;
var remark;
var grade;
if(math < 60 || phy < 60 || chem < 60)
{
    grade="Fails"
    remark="Sorry"
    percentage="0.00"
}
else if(math >= 60 && math <=69 || phy >= 60 && phy <=69 || chem >= 60 && chem <=69){
    grade="B";
    remark="You Need Improvement";
}
else if(math >= 70 && math <=79 || phy >= 70 && phy <=79 || chem >= 70 && chem <=79){
    grade="A";
    remark="Good";
}

else if(math >= 80 || phy >= 80 || chem >= 80){
    grade="A1";
    remark="Excellent";
}

document.write("<h2>Mark Sheet</h2><br/>") ;
document.write("Total Marks: "+ttlMrks+"<br/>") ;
document.write("Marks Obtained: "+marksObtnd+"<br/>") ;
document.write("Percentage: "+percentage+" %<br/>") ;
document.write("Grade: "+grade+"<br/>") ;
document.write("Remarks: "+remark+"<br/>") ;

































