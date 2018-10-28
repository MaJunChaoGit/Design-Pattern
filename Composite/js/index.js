var News = function () {
  this.children = [];
  this.element = null;
}

News.prototype = {
  init: function () {
    throw new Error("请重写您的方法");
  },
  add: function () {
    throw new Error("请重写您的方法");
  },
  getElement: function () {
    throw new Error("请重写您的方法");
  }
}

function inheritObject(o) {
  function F() {};

  F.prototype = o;

  return new F();
}

function inheritPrototype(subClass, supClass) {
  var p = inheritObject(supClass.prototype);
  p.constructor = subClass; // !!!!!!由于咱们只需要父类的一个副本,而不需要父类的构造器,重置一下父类副本的构造器

  subClass.prototype = p;
}

var Container = function (id, parent) {
  News.call(this);
  this.id = id;
  this.parent = parent;
  this.init();
}

inheritPrototype(Container, News);

Container.prototype.init = function () {
  this.element = document.createElement('ul');
  this.element.id = this.id;
  this.element.className = 'new-container';
}

Container.prototype.add = function (child) {
  this.children.push(child);
  this.element.appendChild(child.getElement());
  return this;
}

Container.prototype.getElement = function () {
  return this.element;
}

Container.prototype.show = function () {
  this.parent.appendChild(this.element);
}

var Item = function (classname) {
  News.call(this);
  this.classname = classname || '';
  this.init();
}

inheritPrototype(Item, News);

Item.prototype.init = function () {
  this.element = document.createElement('li');
  this.element.className = this.classname;
}

Item.prototype.add = function (child) {
  this.children.push(child);
  this.element.appendChild(child.getElement());
  return this;
}

Item.prototype.getElement = function () {
  return this.element;
}

var NewsGroup = function (classname) {
  News.call(this);
  this.classname = classname || '';
  this.init();
}

inheritPrototype(NewsGroup, News);

NewsGroup.prototype.init = function () {
  this.element = document.createElement('div');
  this.element.className = this.classname;
}

NewsGroup.prototype.add = function (child) {
  this.children.push(child);
  this.element.appendChild(child.getElement());
  return this;
}

NewsGroup.prototype.getElement = function () {
  return this.element;
}

var ImageNews = function (url, href, classname) {
  News.call(this);
  this.url = url || '';
  this.href = href || '#';
  this.classname = classname || 'normal';
  this.init();
}

inheritPrototype(ImageNews, News);

ImageNews.prototype.init = function () {
  this.element = document.createElement('a');
  var img = new Image();
  img.src = this.url;
  this.element.appendChild(img);
  this.element.className = 'image-news ' + this.classname;
  this.element.href = this.href;
}

ImageNews.prototype.add = function () {}

ImageNews.prototype.getElement = function () {
  return this.element;
}

var IconNews = function (text, href, type) {
  News.call(this);
  this.text = text || '';
  this.href = href || '#';
  this.type = type || 'video';
  this.init();
}

inheritPrototype(IconNews, News);
IconNews.prototype.init = function () {
  this.element = document.createElement('a');
  this.element.innerHTML = this.text;
  this.element.href = this.href;
  this.element.className = 'icon' + this.type;
}
IconNews.prototype.add = function(){}
IconNews.prototype.getElement = function () {
  return this.element;
}

var EazyNews = function (text, href) {
  News.call(this);;
  this.text = text || '';
  this.href = href || '#';
  this.init();
}

inheritPrototype(EazyNews, News);

EazyNews.prototype.init = function () {
  this.element = document.createElement('a');
  this.element.innerHTML = this.text;
  this.element.href = this.href;
  this.element.className = 'text';
}

EazyNews.prototype.add = function() {};
EazyNews.prototype.getElement = function() {
  return this.element;
}

var TypeNews = function(text, href, type, pos) {
  News.call(this);
  this.text = text || '';
  this.href = href || '#';
  this.type = type || '';
  this.pos = pos || 'left';
  this.init();
}

inheritPrototype(TypeNews, News);

TypeNews.prototype.init = function () {
  this.element = document.createElement('a');

  if (this.pos === 'left') {
    this.element.innerHTML = '[' + this.type + '] ' + this.text;
  } else {
    this.element.innerHTML = this.text + ' [' + this.type + ']';
  }
  this.element.href = this.href;
  this.element.className = 'text';
}

TypeNews.prototype.add = function () {};

TypeNews.prototype.getElement = function () {
  return this.element;
}

var news1 = new Container('news', document.body);
news1.add(
  new Item('noraml').add(
    new IconNews('梅西不拿金球也伟大', '#', 'video')
  )
).add(
  new Item('noraml').add(
    new IconNews('保护强国强队用意明显', '#', 'live')
  )
).add(
  new Item('noraml').add(
    new NewsGroup('has-img').add(
      new ImageNews('./js/a.jpg', '#', 'small')
    ).add(
      new EazyNews('从240斤胖子变成型男', '#')
    ).add(
      new EazyNews('五大雷人跑步机', '#')
    )
  )
).show();