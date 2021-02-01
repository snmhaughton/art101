/*
 * Author:  Noelle M-H <smillerh@ucsc.edu>
 * Created: 1.27.2021
 * License: Public Domain
 */

 // Define Variables
 myTransport = ["car", "bus", "walking","biking"];


myMainRide = {
    make: "Honda",
    model: "Accord",
    color: "red",
    year: 1995,
    age: function() {
        return 2021 - year;
    }

}

//output
document.writeln("Getting around:" + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    
