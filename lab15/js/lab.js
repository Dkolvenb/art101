/*
 * Author: Dylan Kolvenbach <dkolvenb@ucsc.edu>
 * Created: 29 November 2021
 * License: Public Domain
 */

 //apiEndpoint = "https://api.chucknorris.io/jokes/random";
var apiEndpoint = "https://api.kanye.rest/";

$("#activate").click(runAPI);

function printOutput(text){
  $("#output").html(text);
};

function runAPI() {
  console.log("Doing API Stuff");
  // Using the core $.ajax() method
  $.ajax({
    // API endpoint
    url: apiEndpoint,
    // POST or GET request
    type: "GET",
    // data type we expect back
    dataType : "json",
})
// If the request succeeds
// data is passed back
.done(function(data) {
    console.log("Success:", data);
    $("#output").append("<p>" + data.quote + ".</p>")
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);
});
}
