var messageButton = document.querySelector(".receive-message");
var affirmationButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var careDisplay = document.querySelector(".message-box");
var logo = document.querySelector(".meditate-logo");

var mantras = [
  "The truth is out there",
  "I want to believe",
  "Trust no one",
  "Deny everything",
  "Apology is policy",
  "Deceive. Inveigle. Obfuscate.",
  "Resist or serve",
  "Fight the future",
  "All lies lead to the truth",
  "Nothing vanishes without a trace",
  "They always do what they will",
  "Not everything dies",
];

var affirmations = [
  "Most men pursue pleasure with such breathless haste that they hurry past it. - Kierkegaard",
  "There exists a kind of knowledge that is without love. It does not purify the psyche in any way, but kills it - Gregory Palamas",
  "I only wish that wisdom were the kind of thing that flowed … from the vessel that was full to the one that was empty. - Plato",
  "For one swallow does not make a summer, nor does one day make a man blessed and happy. - Aristotle",
  "People travel to wonder at the mountains, at the sea, at the rivers, at the ocean, they pass by themselves without wondering. - Augustine",
  "There is no such thing on earth as an uninteresting subject; the only thing that can exist is an uninterested person. - Chesterton",
  "The awful thing is that beauty is mysterious as well as terrible. God and the devil are fighting there and the battlefield is the heart of man. - Dostoyevsky",
  "I am not bothered by the fact that I am not understood. I am bothered when I do not know others. - Confucius",
  "If he cannot stop the mind that seeks after fame and profit, he will spend his life without finding peace. - Dogen",
  "Morality is not properly the doctrine of how we may make ourselves happy, but how we may make ourselves worthy of happiness. - Kant",
  "I am condemned to be free. - Sartre",
  "The idea does not belong to the soul; it is the soul that belongs to the idea. - Peirce",
];

messageButton.addEventListener("click", displayCare);

function displayCare() {
  logo.classList.add("hidden");
  if (affirmationButton.checked) {
  careDisplay.innerText = `${affirmations[getRandomIndex(affirmations)]}`;
  } else if (mantraButton.checked) {
  careDisplay.innerText = `${mantras[getRandomIndex(mantras)]}`;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// Error handling and clear button
// User should not be able to click the “Receive Message” button unless they have selected a message option.
// The user can click a clear button, which clears the page of any message.
// User should only be able to click the clear button if a message is visible.
// When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
// If you’ve added other buttons or inputs, be sure to add some error handling for them as well.
