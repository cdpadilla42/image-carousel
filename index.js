const carouselModule = (function() {
  const imgs = document.querySelectorAll('.images img');

  const setIndexForImgs = function() {
    imgs.forEach((img, index) => {
      img.setAttribute('data-index', index);
    });
  };

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

  const addListenersToNavDot = function(dot, index) {
    // adds listener that swaps to selected image upon click for each dot
    dot.addEventListener('click', () => {
      const oldImg = document.querySelector('.active');
      swapActiveImg(oldImg, imgs[index]);
      showActiveDot(index);
    });
  };

  const createDotMenu = function() {
    const navDotsDiv = document.querySelector('.nav-dots');
    imgs.forEach((img, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.setAttribute('id', `button-${index}`);
      dot.setAttribute('data-index', index);
      navDotsDiv.appendChild(dot);
      addListenersToNavDot(dot, index);
    });
  };

  const addAutoScroll = function() {
    window.setInterval(() => {
      const currentImgIndex = parseInt(getCurrentImgIndex());
      let nextImgIndex = currentImgIndex + 1;
      if (nextImgIndex > imgs.length - 1) {
        nextImgIndex = 0;
      }
      moveToNextImg(currentImgIndex);
      showActiveDot(nextImgIndex);
    }, 5000);
  };

  const showActiveDot = function(index) {
    const currentActiveDot = document.querySelector('.current');
    if (currentActiveDot !== null) {
      currentActiveDot.classList.remove('current');
    }
    const activeDot = document.querySelector(`#button-${index}`);
    activeDot.classList.add('current');
  };

  const activateDotHighlighting = function() {
    showActiveDot(0);
  };

  const startCarousel = function() {
    setIndexForImgs();
    activateImg(imgs[0]);
    addListenersToButtons();
    createDotMenu();
    activateDotHighlighting();
    addAutoScroll();
  };

  return { startCarousel };
})();

carouselModule.startCarousel();
