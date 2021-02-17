/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.15.2021
 * License: Public Domain
 */

//reorder userName taken from lab 7
function reorderUserName(word){
  return word.toLowerCase().split('').sort().join('');
}

//find the button element
 buttonEl = document.getElementById("my-button");
 console.log("button element:", buttonEl);
//find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
//find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);
//Attach an event listener to your button that gets value from input and runs through sort
 buttonEl.addEventListener("click", function(){
   //get value from name element
   var userName = inputEl.value;
   //modify value  - sort
   var newName = reorderUserName(userName);
   //put value in output element
   outputEl.innerHTML = "<p class=name><span>" + newName + "</span></p>";

 });
