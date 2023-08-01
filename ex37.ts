/*Ex:37 *Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
 that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
 and a shirt of any size with a different message.*/

 function large_shirt(size="Large"  ,  msg="I Love Typescript")
 {
   if (size=="Small")
   {
    msg="Good things take time";
   }
  console.log(`${size} ! ${msg}`);

 }
 large_shirt("Small!","Good things take time!" );
 large_shirt("Medium");
 large_shirt("Large");



