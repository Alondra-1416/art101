// index.js - This lab we experimented with Loops with our partner 
// Author: Alondra Hernandez 
// Date: November 18 2024    

function fizzBuzzBoom() {
    let oneLongString = ""; 

    for (let i = 1; i <= 200; i++) { // Loop from 1 to 200
        let out = ""; 

        if (i % 3 === 0) {
            out += "Fizz";
        }
        if (i % 5 === 0) {
            out += "Buzz";
        }
        if (i % 7 === 0) {
            out += "Boom";
        }

        if (out === "") {
            out = i;
        } else {
            out = i + " - " + out; 
        }
        oneLongString += out + "!<br>";
    }

    $("#output").html(oneLongString);
}

fizzBuzzBoom();
