for (var index=0; index<10; index++){
  //block of code
  console.log(index);
//create 10 div elements with a class name box inside the container div
var boxEl = document.createElement("div");
boxEl.className = "box";
//add an id box_id_0, box_id_1....
boxEl.id="box_id_"+(index+1);
//boxEl.id="box_id_"+(index);
document.getElementById('container').appendChild(boxEl);

}

//translate to jquery
for (var index=0; index<10; index++){
  //jquery block of code
  $('#container').append("<div class='box'></div>");
  //other option
  //color the even boxes with red and odd boxes with red
  if(index%2==0){
    $('#container').append("<div id='box_id_"+index+"' class='box'></div>");
  } else{

  }

}
