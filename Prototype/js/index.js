var LoopImages = function (imgArr, container) {
  this.imagesArray = imgArr;
  this.container = container;
}

LoopImages.prototype.changeImage = function() {};
LoopImages.prototype.createImage = function () {};

var SlideLoopImg = function (imgArr, container) {
  LoopImages.call(this, imgArr, container);
}

SlideLoopImg.prototype = new LoopImages();

SlideLoopImg.prototype.changeImage = function () {
  console.log('SlideLoopImg change');
}

var FadeLoopImg = function (imgArr, container) {
  LoopImages.call(this, imgArr, container);
}

FadeLoopImg.prototype = new LoopImages();

FadeLoopImg.prototype.changeImage = function () {
  console.log('FadeLoopImg change');
}
