/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.15.2021
 * License: Public Domain
 */


 //find the button element
 buttonEl = document.getElementById("my-button");
 //Attach an event listener to your button that gets value from input and runs through sort
 buttonEl.addEventListener("click", function(){
     inputValue=document.getElementById("user-name").value;
     console.log("you input:", inputValue);

 });
