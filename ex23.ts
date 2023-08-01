/* Ex:23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')*/

import * as promptSync from 'prompt-sync'
const prompt= promptSync();

console.log("Is Car subaru? I predict true");
let car = prompt("Enter your car name=");
if (car=== "subaru")
{ 
    console.log("car== 'subaru'");
}
//test 2
let age:number= parseInt(prompt("enter your age"));
if (age<17)
{
    console.log("You are a minor");
}
else
    console.log("You are eligible for the interview");
 //test 3
 let marks= 70;
 if(marks>50)
 {
    console.log("You have passed the test with marks greater than 50");
 }   
 //test 4
 let city= "Lahore";
 if (city=="Lahore")
 {
    console.log("Your city is Lahore");
 }
// Test 5
let book= "The Alchemist"
if (book==="The Alchemist")
{
    console.log("The writer is Paulo Coelho");
}
//Test 6 that evaluates false
let stu_grade= "B";
if (stu_grade== "A" || stu_grade=="a")
{
    console.log("You are awarded with scholarship")
}
//Test 7 
let luckynum=2;
if (luckynum==7)
{
    console.log("Your lucky number is 7")
}

//Test 8
let response="N"
if (response=="Y")
{
    console.log("You have earned a membership card");
}
//Test 9
let num1= 12;
if (num1<0)
{
    console.log("The number is negative");
}
// Test 10
let hour=13;
if (hour<12)
{
    console.log("Its a.m.");
}


