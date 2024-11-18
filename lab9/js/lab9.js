// index.js - This lab we experimented with jQuery with our partner 
// Author: Alondra Hernandez 
// Date: November 4 2024   

// add button to challenge section
$("#Challenge").append("<button id='button-Challenge'>Make Special</button>"); 
$("#button-Challenge").click(function(){
    $("#Challenge").toggleClass("special");
}); 

// add button to Problems
$("#Problems").append("<button id='button-Problems'>Make Special</button>"); 
$("#button-Problems").click(function(){
    $("#Problems").toggleClass("special");
});  

// add button to Reflection
$("#Reflection").append("<button id='button-Reflection'>Make Special</button>"); 
$("#button-Reflection").click(function(){
    $("#Reflection").toggleClass("special");
}); 

// add button to Results
$("#Results").append("<button id='button-Results'>Make Special</button>"); 
$("#button-Results").click(function(){
    $("#Results").toggleClass("special");
});  
