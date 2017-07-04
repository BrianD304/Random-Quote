//target items using JSON
var currentQuote = "";
var currentAuthor = "";



var quotes = [
  "Don't cry because it's over, smile because it happened.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "Be yourself; everyone else is already taken.",
  "Be the change that you wish to see in the world.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "If you tell the truth, you don't have to remember anything.",
  "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
  "The fool doth think he is wise, but the wise man knows himself to be a fool.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
  "If you judge people, you have no time to love them.",
  "I'm not afraid of death; I just don't want to be there when it happens.",
  "Folks are usually about as happy as they make their minds up to be.",
  "One good thing about music, when it hits you, you feel no pain.",
  "Do what you can, with what you have, where you are.",
  "There is no friend as loyal as a book.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way out of the labyrinth of suffering is to forgive.",
  "Not all those who wander are lost.",
  "It takes courage to grow up and become who you really are.",
  "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
  "Some day you will be old enough to start reading fairy tales again.",
  "Knowing yourself is the beginning of all wisdom.",
  "I became insane, with long intervals of horrible sanity.",
  "I would rather walk with a friend in the dark, than alone in the light."
];
var quoters = [
  "Dr. Seuss",
  "Albert Einstein",
  "Oscar Wilde",
  "Gandhi",
  "Robert Frost",
  "Mark Twain",
  "Marilyn Monroe",
  "William Shakespeare",
  "Thomas Edison",
  "Groucho Marx",
  "Mother Teresa",
  "Woody Allen",
  "Abraham Lincoln",
  "Bob Marley",
  "Theodore Roosevelt",
  "Ernest Hemingway",
  "Winston Churchill",
  "John Green",
  "J.R.R. Tolkien",
  "E.E. Cummings",
  "Jimi Hendrix",
  "C.S. Lewis",
  "Aristotle",
  "Edgar Allan Poe",
  "Hellen Keller"
];
function tweet() {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text=');
}
function getQuote() {
  var id = Math.floor(Math.random() * 25);

  document.getElementById("quote").innerHTML = '"' + quotes[id] + '"';
  document.getElementById("quoter").innerHTML = "-" + quoters[id];
};
$(document).ready(function() {
  
  $('#tweet').on('click', tweet);

});