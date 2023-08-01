/* 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
let alien_colour= "red";
if (alien_colour== "green")
{
    console.log("The player has just earned 5 points shooting a green alien");

}
else if(alien_colour=="yellow" || alien_colour =="red")
{
    console.log(`The player has just earned 10 points for shooting a ${alien_colour} alien`);
}
// version of the program that runs the if block and another that runs the else block.
if(alien_colour=="green")
{
    console.log("The player has just earned 5 points for shooting a green alien");
}
else
{
    console.log(" you have just earned 10 points");
}