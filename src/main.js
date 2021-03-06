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
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedCovers = [];
var currentCover = randomizedCover();

window.onload = displayCover(currentCover);
randomCoverButton.addEventListener('click', displayRandomCover);
makeMyBookButton.addEventListener('click', displayMyBook);
homeButton.addEventListener('click', moveToHomePage);
makeNewButton.addEventListener('click', displayFormView);
viewSavedButton.addEventListener('click', displaySavedView);
saveCoverButton.addEventListener('click', saveCurrentCover);
savedCoversSection.addEventListener('dblclick', deleteClickedCover)

function deleteClickedCover(event) {
  var deleteCoverID = event.target.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == event.target.id) {
      savedCovers.splice(i, 1);
    };
  };
  showSavedCoversArray();
};

function moveToHomePage() {
  homePage.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  formPage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  homeButton.classList.add('hidden');
};

function displayRandomCover() {
  currentCover = randomizedCover();
  displayCover(currentCover);
};

function displayMyBook() {
  event.preventDefault();
  moveToHomePage();
  addInputToArrays();
  var createdCover = new Cover(coverInput.value, titleInput.value, userDesc1.value, userDesc2.value);
  displayCover(createdCover);
  currentCover = createdCover;
};

function displayFormView() {
  homePage.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  formPage.classList.remove('hidden');
};

function displaySavedView() {
  homePage.classList.add('hidden');
  formPage.classList.add('hidden');
  savedCoversPage.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  showSavedCoversArray();
};

function saveCurrentCover() {
  if (coverNotSaved(currentCover)) {
    savedCovers.push(currentCover);
  };
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomizedCover() {
  var randomCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  return randomCover;
};

function displayCover(coverObject) {
  coverImage.src = coverObject.cover;
  coverTitle.innerText = coverObject.title;
  tagline1.innerText = coverObject.tagline1;
  tagline2.innerText = coverObject.tagline2;
};

function addInputToArrays() {
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(userDesc1.value, userDesc2.value);
};

function coverNotSaved(coverObject) {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === coverObject.id) {
      return false;
    };
  };
  return true;
};

function showSavedCoversArray() {
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    var coverObject = savedCovers[i];
    savedCoversSection.innerHTML += `<section class="mini-cover" id=${coverObject.id}>
      <img class="cover-image" id=${coverObject.id} src=${coverObject.cover}>
      <h2 class="cover-title" id=${coverObject.id}>${coverObject.title}</h2>
      <h3 class="tagline" id=${coverObject.id}>A tale of <span class="tagline-1">${coverObject.tagline1}</span> and <span class="tagline-2">${coverObject.tagline2}</span></h3>
      <img class="price-tag" id=${coverObject.id} src="./assets/price.png">
      <img class="overlay" id=${coverObject.id} src="./assets/overlay.png">
    </section>`;
  };
};
