/*
 * Author: Dylan Kolvenbach <dkolvenb@ucsc.edu>
 * Created: 3 November 2021
 * License: Public Domain
 */

 // sortUserName - a function that takes user input and sorts the letters
 // of their name
 function sortUserName() {
   var userName = document.getElementById("user-name").value;
   console.log("userName =", userName);

   //split string to array
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);

   //sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);

   // join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
 }


 // find the button element
 buttonEl = document.getElementById("my-button");
 console.log("button element:", buttonEl);
 // find the form element
 inputEl = document.getElementById("user-name");
 console.log("input element:", inputEl);
 // find output element
 outputEl = document.getElementById("output");
 console.log("output element:", outputEl);

 // add an event listener to button
 buttonEl.addEventListener("click", function(){
   // get value from name element
   var userName = inputEl.value;
   // modify value - either sort or shuffle
   var newName = sortUserName(userName);
   // put value in output element
   outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
 });
