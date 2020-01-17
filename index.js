const imgs = document.querySelectorAll('.images img');

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
