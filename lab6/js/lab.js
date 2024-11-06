// index.js - purpose of lab 6 is to experiment with JavaScript arrays and objects.
// Author: Alondra Hernandez
// Date: October 24 2024 

// Constants

// Functions

myTransport = ["Train", " Car"," Bike"," Bus"," Ferry"];
//Main Ride 
myMainRide = {
  make: "Ford",
  model: "Bronco",
  color: "Blush Pink",
  year: 1966, 
  age: function() {
    return 2024 - this.year;
  }
} 

//output 
document.writeln("The kind of transportation that I use: ", myTransport, "</br>"); 
//Write object to document 
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
