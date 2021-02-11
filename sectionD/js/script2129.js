//author: Noelle M-H
//date: 02/09/2021
//license: none

//create a div element that has id = "div_1" and text that says "this is annoying"
//console.log that text
//add a button
//change the text from this is annoying into "this is more annoying than I thought" when clicking the button

var divEl = document.getElementById("div_1");
divEl.innerHTML="This is annoying";
console.log(divEl.innerHTML);
var buttonEl = document.createElement("button")
document.body.appendChild(buttonEl);
buttonEl.innerHTML= "press me";

buttonEl.onclick= function(){
  divEl.innerHTML="This is more annoying than I thought";
}
