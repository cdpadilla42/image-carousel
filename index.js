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
  if (oldImg === newImg) {
    return;
  }
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

const addListenersToNavDot = function(dot, index) {
  // adds listener that swaps to selected image upon click for each dot
  dot.addEventListener('click', () => {
    const oldImg = document.querySelector('.active');
    swapActiveImg(oldImg, imgs[index]);
  });
};

const createDotMenu = function() {
  const navDotsDiv = document.querySelector('.nav-dots');
  imgs.forEach((img, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('data-index', index);
    navDotsDiv.appendChild(dot);
    addListenersToNavDot(dot, index);
  });
};

createDotMenu();

const addAutoScrcroll = function() {
  // now write the automated scrolling time function! You're so close!
};
