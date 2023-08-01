/*Checking Usernames: Do the following to create a program that simulates how websites ensure that 
everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need
  to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
const current_users=["Alice", "Berta", "John", "Daniel", "Henry"];
let new_users=["Smith","JOHN", "Phillip", "Henry"];
for(let i=0; i<new_users.length; i++)
{       let userfound=true;
        for(let j=0; j<current_users.length; j++)
    {
        if(new_users[i]==current_users[j] || new_users[i] ==current_users[j].toUpperCase())
        {
            console.log(`The user name ${new_users[i]} already exists, you need to enter a new name`);
            userfound= false;
        }   
    }
        if (userfound==true)
        {
        console.log(`The user name ${new_users[i]} is available`);
        }
}
