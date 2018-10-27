var FactoryMethod = function(type, content) {
  if (this instanceof FactoryMethod) {
    var s = new this[type](content);
    return s;
  } else {
    return new FactoryMethod(type, content);
  }
}

FactoryMethod.prototype = {
  Java: function() {

  },
  JavaScript: function () {

  },
  Php: function() {
     
  }
}