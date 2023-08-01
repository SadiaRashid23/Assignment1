/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy 
of the array of magicians’ names. Because the original array will be unchanged, return the new array and
store it in a separate array. Call show_magicians() with each array to show that you have one array of
the original names and one array with the Great added to each magician’s name.*/
function show_magicians(arr:string[])
{
      console.log(`magicians' names are: ${arr}`);
}
function make_great(arr:string[])
  {
      for (let i in arr){
            arr[i]=arr[i]+ " "+ "The Great";
      }
      return arr
}
 let magicians=["Criss Angel", "David Blaine", "Derren Brown","Dynamo"];
 //copy of array
let magicians_copy=[...magicians];
//return the array and store in a new array
let new_arr= make_great(magicians_copy);
show_magicians(magicians);
show_magicians(new_arr);
 