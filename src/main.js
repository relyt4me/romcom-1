// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var homePage = document.querySelector('.home-view');
var formPage = document.querySelector('.form-view');
var savedCoversPage = document.querySelector('.saved-view');
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');
var makeMyBookButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);

// Add your event listeners here 👇
randomCoverButton.addEventListener("click", function() {
  currentCover.randomizeCover();
  displayCover(currentCover);
});

makeMyBookButton.addEventListener('click', function(){
  event.preventDefault();
  moveToHomePage();
  addInputToArrays();
  var createdCover = new Cover(coverInput.value, titleInput.value, userDesc1.value, userDesc2.value);
  displayCover(createdCover);
  currentCover = createdCover;
})

homeButton.addEventListener("click", function(){
  moveToHomePage();
});

makeNewButton.addEventListener("click", function() {
  homePage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formPage.classList.remove('hidden');
});

viewSavedButton.addEventListener("click", function() {
  homePage.classList.add('hidden');
  formPage.classList.add('hidden');
  savedCoversPage.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
});

saveCoverButton.addEventLisener("click", function() {
  
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

function moveToHomePage() {
  homePage.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  formPage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  homeButton.classList.add('hidden');
};

function addInputToArrays() {
    covers.push(coverInput.value);
    titles.push(titleInput.value);
    descriptors.push(userDesc1.value, userDesc2.value);
};
