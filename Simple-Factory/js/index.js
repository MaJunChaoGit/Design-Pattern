// 简单工厂模式1 , 使用类的实例化模式创建
  var Basketball = function() {
    this.intro = '篮球盛行于美国';
  }
  Basketball.prototype = {
    getMember: function () {
      console.log('篮球需要5人');
    },
    getBallSize: function () {
      console.log('篮球很大');
    }
  }

  var Football = function() {
    this.intro = '足球盛行于巴西';
  }
  Football.prototype = {
    getMember: function () {
      console.log('足球需要11人');
    },
    getBallSize: function () {
      console.log('足球很大');
    }
  }

  var Tennisball = function() {
    this.intro = '每年很多比赛';
  }
  Tennisball.prototype = {
    getMember: function () {
      console.log('网球需要1人');
    },
    getBallSize: function () {
      console.log('网球很大');
    }
  }

  var SportFactory = function(name) {
    switch (name) {
      case 'NBA':
        return new Basketball();
      case 'worldCup':
      return new Football();
      case 'FrenchOpen':
      return new Tennisball();
    }
  }

// 简单工厂模式2, 创建新对象,增强其属性
var createBook = function(name, time, type) {
  var o = new Object();
  o.name = name;
  o.time = time;
  o.type = type;
  o.getName = function() {
    console.log(this.name);
  }
  return o;
}