// 图片加载版本1
var myImage1 = (function () {
  var imageNode = document.createElement('img');
  document.body.appendChild(imageNode);

  return {
    setSrc: function (src) {
      imageNode.src = src;
    }
  }
})();

// myImage1.setSrc('https://t12.baidu.com/it/u=541581695,4055461334&fm=76');


// 图片加载版本2
var myImage2 = (function () {
  var imageNode = document.createElement('img');
  document.body.appendChild(imageNode);
  var img = new Image();

  img.onload = function () {
    imageNode.src = img.src;
  }

  return {
    setSrc: function (src) {
      imageNode.src = './js/a.jpg';
      img.src = src;
    }
  }
})();

// myImage2.setSrc('https://t12.baidu.com/it/u=541581695,4055461334&fm=76');

// 图片加载版本3
var myImage3 = (function () {
  var imageNode = document.createElement('img');
  document.body.appendChild(imageNode);

  return {
    setSrc: function (src) {
      imageNode.src = src;
    }
  }
})();

var proxyImage = (function () {
  var img = new Image();
  img.onload = function() {
    myImage3.setSrc(this.src);
  }

  return {
    setSrc: function(src) {
      myImage3.setSrc('./js/a.jpg');
      img.src = src;
    }
  }
})();

proxyImage.setSrc('https://t12.baidu.com/it/u=541581695,4055461334&fm=76');