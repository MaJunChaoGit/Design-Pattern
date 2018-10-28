function Speed(x, y) {
  this.x = x;
  this.y = y;
}

Speed.prototype.run = function () {
  console.log('运动起来');
}

function Color(cl) {
  this.color = cl;
}

Color.prototype.draw = function () {
  console.log('绘制色彩');
}

function Shape(sp) {
  this.shape = sp;
}

Shape.prototype.change = function () {
  console.log('改变形状');
}

function Speek(wd) {
  this.work = wd;
}

Speek.prototype.say = function () {
  console.log('书写字体');
}

function Ball(x, y, c) {
  this.speed = new Speed(x, y);
  this.color = new Color(c);
}

Ball.prototype.init = function () {
  this.speed.run();
  this.color.draw();
}

function People(x, y, f) {
  this.speed = new Speed(x, y);
  this.font = new Speek(f);
}

People.prototype.init = function () {
  this.speed.run();
  this.font.say();
}

function Spirite(x, y, c, s) {
  this.speed = new Speed(x, y);
  this.color = new Color(c);
  this.shape = new Shape(s);
}

Spirite.prototype.init = function () {
  this.speed.run();
  this.color.draw();
  this.shape.change();
}