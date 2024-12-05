// index.js - This lab we used the information we learned about debugging to fix old assignments. I chose to go back and Fix lab 10 since it was not working like I wanted it to.
// Author: Alondra Hernandez 
// Date: November 21 2024   

function generateText() {
    const text = [
        "Oh, why'd you have to get us into this, Foxy?",  // Felicity
        "I don't know, but I have a possible theory.",
        "I think I have this thing where I need everybody to think I'm the greatest-- the quote, unquote, Fantastic Mr. Fox.",
        "And if they aren't completely knocked out and dazzled and kind of intimidated by me, then I don't feel good about myself.",
        "Foxes traditionally like to court danger, hunt prey and outsmart predators.",
        "And that's what I'm actually good at.",
        "I think at the end of the day I'm just...",
        "I know.",                                       // Felicity
        "We're wild animals.",                           // Felicity
        "I guess we always were.",
        "I promise you if I had all this to do over again I'd have never let you down.",
        "It was always more fun when we did it together anyway.",
        "I love you, Felicity.",
        "I love you, too.",                              // Felicity
        "But I shouldn't have married you."              // Felicity
    ];
    
    let currentIndex = 0;
    let clickCount = 0;

    return function() {
        if (clickCount >= 100) {
            return { text: "Reset to continue.", isFelicity: false };
        }

        const sentence = text[currentIndex];
        const felicityLines = [0, 7, 8, 13, 14]; // Felicity's(Foxy wife)
        const isFelicity = felicityLines.includes(currentIndex);
        currentIndex = (currentIndex + 1) % text.length; // Loop
        clickCount++;
        return { text: sentence, isFelicity: isFelicity };
    };
}

//text
const getText = generateText();

$("#make-convo").click(function() { 
    const result = getText();  
    const textClass = result.isFelicity ? "felicity-line" : "fox-line";
    $("#output").append('<div class="' + textClass + '"><p>' + result.text + '</p></div>');   
});
