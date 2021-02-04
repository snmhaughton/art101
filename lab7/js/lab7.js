/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 1.27.2021
 * License: Public Domain
 */

//name sorter function and variable declared to sort names
function nameSorter() {
    var userName = window.prompt("Hello! Please enter your name.");
    console.log("userName =", userName);
    //turn string to array to sort
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the nameArray
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //put array back with string
    var nameSorted = nameArraySort.join('')
    console.log("nameSorted =", nameSorted);
    return nameSorted;

}

//output
document.writeln("Here's your new name: ",
  nameSorter(), "</br>");
