/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 2.25.2021
 * License: Public Domain
 */

var oneLongString =num;
  for (var num=1; num <= 200; num++){
//if number is multiple of all, it should combine FizzBuzzBoom
    if (num % 105 == 0){
      console.log("FizzBuzzBoom");
      oneLongString += num + " - FizzBuzzBoom! <br>";
    } else if (num%15 == 0){
      console.log("FizzBuzz");
      oneLongString += num + " - FizzBuzz! <br>";
    } else if (num%21 == 0){
      console.log("FizzBoom");
      oneLongString += num + " - FizzBoom! <br>";
    } else if (num%35 == 0){
      console.log("BuzzBoom");
      oneLongString += num + " - BuzzBoom! <br>";
    } else if (num%3 == 0);{
      console.log("Fizz");
      oneLongString += num + " - Fizz! <br>";
    } else if (num%5 == 0);{
      console.log("Buzz");
      oneLongString += num + " - Buzz! <br>";
    } else if (num%7 == 0);{
      console.log("Boom");
      oneLongString += num + " - Boom! <br>";
    } else {console.log(num)
          oneLongString += num + "<br>";
    }
};

$("#output").html(oneLongString);
