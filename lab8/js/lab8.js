// index.js - This lab we experimented with anonymous functions and callbacks. 
// Author: Alondra Hernandez 
// Date: October 28 2024  

//const numbers = [4,7,14,15,16]   

function addSeven(x) { 
    return x + 7; 
} 
//Test 
console.log(addSeven(7)); 
console.log(addSeven(14)); 

const numbers = [4,7,14,15,16] 
console.log("My numbers", numbers); 

var result = numbers.map(addSeven); 
console.log("addSeven:", result); 

var Seven = numbers.map(function(x) { 
    return x - 7;
})

console.log("Minus Seven: ", Seven);
