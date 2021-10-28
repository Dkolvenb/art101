/*
 * Author: Dylan Kolvenbach <dkolvenb@ucsc.edu>
 * Created: 27 October 2021
 * License: Public Domain
 */

//declare a function
 function multiply(x) {
     return (x * 3);
 };

 //test Functions
 console.log("What is 845 times 3? ", multiply(845));
 console.log("What is 3 times 3? ", multiply(3));

 //declare an array
 array = [4, 13, 98, 35];
 console.log("My array", array);

 //call on the function and have it work on the array
 var result = array.map(function(x){
    return x * 3;
});
console.log("Array multiplied by 3 ", result);
