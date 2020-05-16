// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover= new Cover(coverImage, coverTitle, tagline1, tagline2);

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", function() {
  currentCover.randomizeCover();
  displayCover(currentCover);
});

// Create your event handlers and other functions here 👇
currentCover.randomizeCover();
displayCover(currentCover);

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayCover(coverObject) {
  coverImage.src = coverObject.cover;
  coverTitle.innerText = coverObject.title;
  tagline1.innerText = coverObject.tagline1;
  tagline2.innerText = coverObject.tagline2;
};
