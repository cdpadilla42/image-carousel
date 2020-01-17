const imgs = document.querySelectorAll('.images img');

const setIndexForImgs = function() {
  imgs.forEach((img, index) => {
    img.setAttribute('data-index', index);
  });
};

setIndexForImgs();

const activateImg = function(img) {
  img.classList.add('active');
};

const deactivateImg = function(img) {
  img.classList.remove('active');
};

const swapActiveImg = function(oldImg, newImg) {
  deactivateImg(oldImg);
  activateImg(newImg);
};

activateImg(imgs[0]);

const moveToNextImg = function(currentImgIndex) {
  let nextImgIndex = parseInt(currentImgIndex) + 1;
  if (imgs[nextImgIndex] === undefined) {
    nextImgIndex = 0;
  }
  swapActiveImg(imgs[currentImgIndex], imgs[nextImgIndex]);
};

const moveToPrevImg = function(currentImgIndex) {
  let nextImgIndex = currentImgIndex - 1;
  if (nextImgIndex === -1) {
    nextImgIndex = imgs.length - 1;
  }
  swapActiveImg(imgs[currentImgIndex], imgs[nextImgIndex]);
};

const getCurrentImgIndex = function() {
  const currentActiveImg = document.querySelector('.active');
  return currentActiveImg.getAttribute('data-index');
};

const addListenersToButtons = function() {
  const backBttn = document.querySelector('.move-back');
  const forwardBttn = document.querySelector('.move-forward');
  backBttn.addEventListener('click', () => {
    moveToPrevImg(getCurrentImgIndex());
  });
  forwardBttn.addEventListener('click', () => {
    moveToNextImg(getCurrentImgIndex());
  });
};

addListenersToButtons();

const createDotMenu = function() {
  // creates div with dots for selecting imgs. Yay Dynamic coding!
};
