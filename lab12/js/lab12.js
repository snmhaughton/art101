/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.20.2021
 * License: Public Domain
 */

// Create a function sortingHat()
  function sortingHat(str){
    length = str.length;
    mod = length % 4;
    if (mod == 0){
      return "gryffindor"
    }
    else if (mod == 1){
      return "ravenclaw"
    }
    else if (mod == 2){
      return "slytherin"
    }
    else if (mod == 3){
      return "hufflepuff"
    }
  }

//create an event listener attached to #button
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function(){
//that gets the value of #input and assigns it to a variable name
    var name = document.getElementById("input").value;
//runs sortingHat(name) and stores the result in a variable house
    var house = sortingHat(name);
//appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
    newPara = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newPara;

 })
