//  Create a function questionOne()
var q1Answer="";

function questionOne(answer) {
  // counts the letters in str and assigns it to a variable length
  var length = answer.length;
  // uses modulus (% operator) to get the remainder with 4: mod = length % 2;
  var mod= length % 2;
  // mod will now be a value between 0 and 1
  // create a conditional that will return answer

    if(mod==1){
      q1Answer= "Correct!";
    } else if(mod==0){
      q1Answer= "False :-( ";
    }
    console.log(q1Answer);

    //task x - use an array to make the code simpler
    var answers = ["I","II"];
    return answers[mod];
  }


// Create an event listener attached to #button
 $("#button").click(function (){
   // that gets the value of #input and assigns it to a variable name
   var answer = $("#input").val();
   // runs sortingHat(name) and stores the result in a variable house
   var response = questionOne(answer);
   // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into "
   $("#output").text("Your answer is:");
   $("#output").append(q1Answer);
 })
