// index.js - This lab we experimented with DOM manipulationwith with our partner 
// Author: Alondra Hernandez 
// Date: November 7 2024   

function generateRandomText() {
    const text = "Oh, why'd you have to get us into this, Foxy? I don't know, but I have a possible theory. I think I have this thing where I need everybody to think I'm the greatest-- the quote, unquote, Fantastic Mr. Fox. And if they aren't completely knocked out and dazzled and kind of intimidated by me, then I don't feel good about myself. Foxes traditionally like to court danger, hunt prey and outsmart predators. And that's what I'm actually good at. I think at the end of the day I'm just... I know. We're wild animals. I guess we always were.I promise you if I had all this to do over again I'd have never let you down. It was always more fun when we did it together anyway.I love you, Felicity. I love you, too. But I shouldn't have married you."
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  } 

  // click listener for button
$("#make-convo").click(function(){ 
    const newText = generateRandomText();  
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');   
}); 
