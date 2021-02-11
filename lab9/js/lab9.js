/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.9.2021
 * License: Public Domain
 */

//Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");
//Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");
new1El.innerHTML = "I'm not sure what this is supposed to say";
 //Change the html attribute of new1El to say something new.
new1El.innerHTML = "I'm still not sure what this should say";
 //appendChild
document.body.appendChild(new1El);
//Create another new element and assign it to a variable new2El
var new2El = document.createElement("anotherEl");
 //Change the html attribute of new2El to say something else.
new2El.innerHTML = "I really hope this is working";
 //Append new2El
document.body.appendChild(new2El);
