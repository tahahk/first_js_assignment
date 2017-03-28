/*10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.*/

var item1 = prompt("Enter Name Of Item 1 ");
var pitem1 = +prompt("Enter Price Of Item 1");
var qitem1 = +prompt("Enter Ordered quantity of item 1");
var item2 = prompt("Enter Name Of Item 2");
var pitem2 = +prompt("Enter Price Of Item 2");
var qitem2 = +prompt("Enter Ordered quantity of item 2");
var cod = +prompt("Enter Delivery Charges");
var cost = (pitem1*qitem1 + pitem2*qitem2)+cod ;
var discount;
document.write("<h1>Shopping Cart</h1>"+"<br/>");
document.write("Price of"+" "+ item1+" " +"is "+pitem1 +" PKR<br/>");
document.write("Quantity of"+" "+ item1+" " + "is "+qitem1 +" <br/>");
document.write("Price of"+" " +item2+" " + "is "+pitem2 +" PKR<br/>");
document.write("Quantity of"+" "+ item2+" " + "is "+qitem2 +" <br/>");
document.write("Total Cost Of Your Order "+cost+"<br/>");


if (cost >= 2000){
discount= (cost * 10/100);
document.write("Discounted Amount: "+ discount+" PKR<br/>");
document.write("Discounted price (10%) is ", +cost-discount+" PKR" );
}