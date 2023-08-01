/* Ex: 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result
 for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
  and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

//Test for equality and inequality of strings
let studentName= "Sarah";
if (studentName=== "Sarah")
{
    console.log("both strings are same")
}
let otherName="Sara";
if(studentName==="otherName")
{console.log("both strings/names are same");
}
else 
{
console.log("both strings/names are not same");
}
//test using the lower case function
if(studentName=== studentName.toLowerCase())
{console.log("both strings are same");
}
else
{
    console.log("lower case and Title case strings/names are not same");
}
//Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to
let num1= 24;
if (num1>0)
console.log("The number is positive");
else if(num1<0)
console.log("The number is negative");
else if(num1==0)
console.log("The number is zero and zero is neither positive nor negative");

let marks= 54;
if(marks>=50)
console.log("You have passed");
if (marks<=49)
console.log("did not pass, better luck next time");
//Tests using "and" and "or" operators
let num2= 64;
if (num2>0 && num2%2==0)
{
console.log("The number is a positive even number ")
}
let obt_marks = 93; 
let grade:string= "A";
if (obt_marks>=90 || grade=="A" )
{
    console.log("You are awared with a scholarship");
}
// test whether an item is in an array or not 
const city : string []= ["Lahore", "London", "NewYork", "Dehli", "Venice"];
let findCity: string= "London";
let found: Boolean=false;
for (let i=0; i< city.length;i++)
{
    if (city[i]== findCity)
    {
        console.log(`The city ${findCity} exists in array of cities`);
        found= true;
        }
}
if (found==false)
{console.log("The city is not found in your array of cities");
}

