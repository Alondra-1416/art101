// index.js - The goal of this project is with my partner work and figure out the functions that take user input and manipulate a string. 
// Author: Alondra Hernandez 
// Date: October 28 2024 

// Lab sorting letters of a user's name 
// Sorts the letters alphabetically displays sorted name.  

// prompt user for their name 
function sortUserName() { 
    let userName = window.prompt("Hello. Tell me your name and I can fix it for you"); 
    let sortedName = userName.split('').sort().join(''); 

    // return the sorted name 
    return sortedName; 
}  

// output the results  
let sortNameres = sortUserName();
document.writeln("Hey Good news I was able to sort your name: " + sortNameres);
    