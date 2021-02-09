/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.8.2021
 * License: Public Domain
 */

//creating the functions with parameter test
function firstThing(test) {
  console.log(test + ": This is the first thing.<br>")
}

function secondThing(test) {
  console.log(test + ": This is the second thing.<br>")
}

function thirdThing(test) {
  console.log(test + ": This is the third thing.<br>")
}
// first test - calling three functions with TEST 1 argument
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//second test - calling three functions with TEST 2 argument
setTimeout(function() {
  firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2");
}, 0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

//third test - calling three functions adjusted to 2,3,1
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
