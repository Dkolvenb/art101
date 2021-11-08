/*
 * Author: Dylan Kolvenbach <dkolvenb@ucsc.edu>
 * Created: 8 November 2021
 * License: Public Domain
 */

//make a button for each section
$("#challenge").append("<button id='c-button'>Click Me!</button>");
$("#problem").append("<button id='p-button'>Click Me!</button>");
$("#results").append("<button id='r-button'>Click Me!</button>");

//add a function to each button
$("#c-button").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
  // find the section, toggle a class
  $(this).parent().toggleClass("special");
})
