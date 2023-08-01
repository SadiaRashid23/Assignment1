/*Ex: 42 Great Magicians: Start with a copy of your program from Exercise 39 (which is 41 now). 
Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
 Call show_magicians() to see that the list has actually been modified.*/

 function show_magicians(arr:string[])
 {
       console.log(`magicians names are: ${arr}`);
 }
   function make_great(arr:string[])
  {
      for (let i in arr){
            arr[i]=arr[i]+ " "+ "The Great";
      }
}
let magicians=["Criss Angel", "David Blaine", "Derren Brown","Dynamo"];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
   export{};

 