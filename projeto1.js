
let quotes = [ 
["The only way to do great work is to love what you do.", "J.R.R. Tolkien"],
["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
["Do not wait for the perfect moment, take the moment and make it perfect." ,"William Shakespeare"],
["Believe you can and you're halfway there.","Emily Dickinson"],
["The future belongs to those who believe in the beauty of their dreams." ,"Eleanor Roosevelt"],
["The best way to predict your future is to create it.","Peter Drucker"],
["You have within you right now, everything you need to deal with whatever the world can throw at you.","Brian Tracy"],
["The only person you are destined to become is the person you decide to be." ,"Ralph Waldo Emerson"],
["The journey of a thousand miles begins with a single step." ,"Lao Tzu"],
["You miss 100% of the shots you don't take." ,"Wayne Gretzky"]]



let text= document.querySelector(".quote__text"); 
let author= document.querySelector(".quote__author"); 

function changeQuote () { 
    let numQuote = Math.floor(Math.random()*quotes.length);
    text.textContent= quotes[numQuote][0];
    author.textContent=quotes[numQuote][1];
}

document.querySelector(".quote__button").addEventListener("click",changeQuote);