/*
 * Author: Dylan Kolvenbach <dkolvenb@ucsc.edu>
 * Created: 29 October 2021
 * License: Public Domain
 */

 //Assign output to a variable
 var outputEl = document.getElementById("output");

 //create a new element and assign it to a variable
  var new1El = document.createElement("p");

//create a parent node
  var line1 = document.createTextNode("This is the first element made in my JavaScript!");

//append child node to parent node
  new1El.appendChild(line1);
  outputEl.appendChild(new1El);

  var new2El = document.createElement("t");

  var line2 = document.createTextNode("This is the second element made in my JavaScript!");

  new2El.appendChild(line2);
  outputEl.appendChild(new2El);
