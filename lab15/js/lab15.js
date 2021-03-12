/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 3.4.2021
 * License: Public Domain
 */

 //Add a click event to the button
 $( "#api-button").click(apiTasks);

 function apiTasks(){
   console.log("doing api tasks");
//using jQuery ajax
 $.ajax({
     // The URL for the request (from the api docs)
     url: "http://numbersapi.com/13",
     // The data to send (will be converted to a query string)
     data: {
             // here is where any data required by the api goes (check the api docs)
             id: 123,
             api_key: "blahblahblah",
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // if the request succeeds
     success: function(data) {
         // do stuff
         console.log("Success:", textData);
     },
     // if the request fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Failure:", textStatus, errorThrown);
     }
 })
