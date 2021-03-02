/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.16.2021
 * License: Public Domain
 */

//find the element to locate the id (challenge-button for the first)


$("#challenge").append("<button id='challenge-button'>This is the button</button>");
//Add a click event to each button
$("#challenge-button").click(function(){
//toggle class
  $("#challenge").toggleClass("special")
  	});

$("#problems").append("<button id='problems-button'>This is the button</button>");
//add click event
$("#problems-button").click(function(){
//toggle class
  $("#problems").toggleClass("special")
    });

$("#results").append("<button id='results-button'>This is the button</button>");
//add a click event
$("#results-button").click(function(){
//find section, toggle class
  $("#results").toggleClass("special")
    });
