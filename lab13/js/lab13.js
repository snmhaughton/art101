/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.25.2021
 * License: Public Domain
 */

 var oneLongString += num + " Fizz!<br>";

for (var num=1; num<=200; num++) {
  console.log(num);
  if (num%15 == 0){
    console.log("FizzBuzz");
  } if (num%21 == 0){
    console.log("FizzBoom");
  } if (num%35 == 0){
    console.log("BuzzBoom");
  } if (num%3 == 0);{
    console.log("Fizz");
  } if (num%5 == 0);{
    console.log("Buzz");
  } if (num%7 == 0);{
    console.log("Boom");
  }
}

$("#output").html(oneLongString);
