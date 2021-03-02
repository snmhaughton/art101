



var original_text = $("#original_text").text();
console.log(original_text);

function matchingFunction(){
  var input_text = $("#input_text").val();
  console.log(input_text);
}

$("#input_text").keypress(matchingFunction)
