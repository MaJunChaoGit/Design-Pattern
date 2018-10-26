// 使用闭包模拟类,并生成实例方法与类的静态方法,类的私有方法
// var Book = (function() {

//   var bookNum = 0;

//   var checkId = function () {

//   }

//   var _book = function(id, name, price) {
//     this.getId = function() {
//       return id;
//     }

//     this.getName = function() {
//       return name;
//     }

//     this.getPrice = function () {
//       return price;
//     }

//     this.setId = function (id) {
//       this.id = id;
//     }
//     this.setName = function (name) {
//       this.name = name;
//     }
//     this.setPrice = function (price) {
//       this.price = price;
//     }

//     this.setId(id);
//     this.setName(name);
//     this.setPrice(price);
//     if(bookNum++ > 2) throw new Error('就两本书');
//   }

//   _book.prototype = {
//     isJsBook: true,
//     display: function() {
//       console.log('设计模式');
//     }
//   }
//   return _book;
// })();

// 编写一个安全的类,当用户忘记使用new 来创建时可以保护
// var Book = function(id, name) {
//   if (this instanceof Book) {
//     this.id = id;
//     this.name = name;
//   } else {
//     return new Book(id, name);
//   }
// }

// !!!继承的多种实现方式
  
  // 1.类的基本继承, 他的优势在于可以保证父类的共有属性可以正确的被提取
  //                但是如果父类中的共有属性为引用类型,那么会导致所有的子类实例修改其一,所有的都会被修改
  // function SuperClass() {
  //   this.supValue = true;
  //   this.container = ['1', '设计模式', 123];
  // }
  // SuperClass.prototype.getSupValue = function() {
  //   return this.supValue;
  // }

  // function SubClass() {
  //   this.subValue = false;
  // }

  // SubClass.prototype = new SuperClass();
  // SubClass.prototype.getSubValue = function() {
  //   return this.subValue;
  // }

  // 2.构造器继承, 他的优势在于可以保证新建的对象每个实例都有自己属性,并且可以很方便的像父类传入参数
  //              但是每个对象无论是父类还是子类都是独一无二的,因此违背了面向对象的复用原则
  // function SuperClass(id) {
  //   this.id = id;
  //   this.supValue = true;
  //   this.container = ['1', '设计模式', 123];
  // }

  // SuperClass.prototype.getSupValue = function() {
  //   return this.supValue;
  // }

  // function SubClass(id) {
  //   SuperClass.call(this, id);
  //   this.subValue = false;
  // }

  // SubClass.prototype.getSubValue = function() {
  //   return this.subValue;
  // } 
   
  // 3.组合继承, 他的优势在于可以既保证新建的对象有自己的实体属性,互不影响,又可以使用父类的共有属性
  //            但是他调用了两次父类的方法,增大了内存的消耗
  // function SuperClass(id) {
  //   this.id = id;
  //   this.supValue = true;
  //   this.container = ['1', '设计模式', 123];
  // }

  // SuperClass.prototype.getSupValue = function() {
  //   return this.supValue;
  // }
  // function SubClass(id) {
  //   SuperClass.call(this, id);
  //   this.subValue = false;
  // }

  // SubClass.prototype = new SuperClass();

  // SubClass.prototype.getSubValue = function() {
  //   return this.subValue;
  // } 

  // 4. 洁净继承, 他的优势在与使用方法,内存消耗小,非常灵活
  //             但是如果父类中的共有属性为引用类型,那么会导致所有的子类实例修改其一,所有的都会被修改
  // function inheritObject(o) {
  //   function F() {};

  //   F.prototype = o;

  //   return new F();
  // }

  // 5.寄生式继承, 在洁净继承的基础上进行了拓展,二次封装,可以拓展对象自己的属性
  //              但是如果父类中的共有属性为引用类型,那么会导致所有的子类实例修改其一,所有的都会被修改
  // function inheritObject(o) {
  //   function F() {};

  //   F.prototype = o;

  //   return new F();
  // }

  // function createBook(book) {

  //   var o = inheritObject(book);

  //   o.getName = function() {
  //     console.log(this.name);
  //   }

  //   return o;
  // }
  // 6.寄生组合式继承
  // 
  // function inheritObject(o) {
  //   function F() {};

  //   F.prototype = o;

  //   return new F();
  // }

  // function inheritPrototype(subClass, supClass) {
  //   var p = inheritObject(supClass.prototype);
  //   p.constructor = subClass; // !!!!!!由于咱们只需要父类的一个副本,而不需要父类的构造器,重置一下父类副本的构造器

  //   subClass.prototype = p;
  // }

  // function SuperClass(id) {
  //   this.id = id;
  //   this.supValue = true;
  //   this.container = ['1', '设计模式', 123];
  // }

  // SuperClass.prototype.getSupValue = function() {
  //   return this.supValue;
  // }

  // function SubClass(id) {
  //   SuperClass.call(this, id);

  //   this.subValue = false;
  // }

  // inheritPrototype(SubClass, SuperClass);

  // SubClass.prototype.getSubValue = function() {
  //   return this.subValue;
  // } 
  // 7.多继承实现
  // Object.prototype.mix = function() {
  //   var i = 0;
  //   var length = arguments.length;
  //   var args = null;

  //   for (;i <length;i++) {
  //     args = arguments[i];

  //     for(var property in args) {
  //       this[property] = args[property];
  //     }
  //   }
  // }

  // 8.深度复制多继承

  var deepClone = function(obj) {
    if (typeof obj !== 'object') return obj;
    if (obj instanceof Array) {
      var newObj = [];
    } else {
      var newObj = {};
    }
    for (var key in obj) {
      if (typeof obj[key] !== 'object') {
        newObj[key] = obj[key];
      } else {
        newObj[key] = deepClone(obj[key]);
      }
    }
    return newObj;
  }

  Object.prototype.mix = function() {
    var i = 0;
    var length = arguments.length;
    var args = null;

    for (;i <length;i++) {
      args = arguments[i];

      for(var property in args) {
        this[property] = deepClone(args[property]);
      }
    }
  }