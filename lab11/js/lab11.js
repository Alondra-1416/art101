// index.js - This lab we experimented with our partners JS events. 
// Author: Alondra Hernandez 
// Date: November 11 2024    

//Lab 7 fuction

function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){

    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});