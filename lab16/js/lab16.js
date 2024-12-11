// index.js - This lab we experiment with processing JSON from an API with our partners. 
// Author: Alondra Hernandez 
// Date: December 2 2024   

let currentComic = null; 
let latestComic = null;  
    /** 
    * @param {number|null} comicNumber 
    */
function fetchComic(comicNumber = null) {
    const url = comicNumber
        ? `https://api.allorigins.win/get?url=${encodeURIComponent(`https://xkcd.com/${comicNumber}/info.0.json`)}`
        : `https://api.allorigins.win/get?url=${encodeURIComponent("https://xkcd.com/info.0.json")}`; 

    $.ajax({
        url : url,  
        // POST or GET request
        type: "GET",
        
        // Data type
        dataType: "json",

        success: function(response) {
            try {
                const comicObj = JSON.parse(response.contents); 

                currentComic = comicObj.num; 
                if (!latestComic) {
                    latestComic = comicObj.num;
                } 

                $("#output").html(`
                    <h3>${comicObj.title}</h3> 
                    <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
                `);
                console.log(comicObj);
            } catch (e) {
                console.log("Error parsing JSON:", e);
            }
            updateButtonStates();  
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("AJAX Error:", textStatus, errorThrown); 
            $("#output").text("Failed to load the comic. Please try again."); 
        },
    }); 
}  

function updateButtonStates() {
    $("#prev").prop("disabled", currentComic<=1); 
    $("#next").prop("disabled", currentComic >= latestComic); 
} 

$(document).ready(function () {
    fetchComic(); 
    $("#prev").click(function () {
        if (currentComic > 1) { 
            fetchComic(currentComic - 1); 
        }
    }); 
    $("#next").click(function () {
        if (currentComic < latestComic) { 
            fetchComic(currentComic + 1); 
        }
    }); 
}); 
