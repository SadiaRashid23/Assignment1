//Ex 3: Name Cases: Store a person’s name in a variable, and then 
//print that person’s name in lowercase, uppercase, and titlecase.
let n="Sadia Rashid"
console.log("Name in lower case\n"+n.toLowerCase());
console.log("Name in upper case\n"+n.toUpperCase());
// to convert name in title case
let str: string[] = n.toLowerCase().split(" ")
for (let i = 0; i < str.length; i++) 
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
console.log("Name in Title Case");
console.log(str.join(" "));
