/*
 * Author: Dylan Kolvenbach <dkolvenb@ucsc.edu>
 * Created: 20 October 2021
 * License: Public Domain
 */

// Define Variables
myTransport = ["car", "walking", "bike"];

myMainRide = {
     make: "Chevrolet",
     model: "Corvette Stingray",
     color: "Red",
     year: 1967,
     age: 54
 };

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
