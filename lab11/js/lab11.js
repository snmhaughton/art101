/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.16.2021
 * License: Public Domain
 */


//Add a click event to each button
$("#challenge").append("<button id=challenge-button>This is the button</button>");
$("#challenge-button").click(function(){
    		// action goes here!!
    $("#challenge").toggleClass("special")
  	});

$("#problems").append("<button id=problems-button>This is the button</button>");
$("#problems-button").click(function(){
  $("#problems").toggleClass("special")
    });

$("#results").append("<button id=results-button>This is the button</button>");
$("#results-button").click(function(){
  $("#results").toggleClass("special")
    });
