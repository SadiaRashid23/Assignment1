"use strict";
/* 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let user_N = ["Eric", "Edmond", "Ellis", "Admin", "Adam"];
if (user_N.length == 0) {
    console.log("we need more users");
}
else {
    for (let i = 0; i < user_N.length; i++) {
        user_N.pop();
    }
    console.log("we need more users");
}
