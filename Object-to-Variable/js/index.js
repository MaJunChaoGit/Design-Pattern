// 对真假对象进行链式调用
var CheckObject = function() {
  return {
    checkNames: function () {
      console.log('检测姓名');
      return this;
    },
    checkEmails: function() {
      console.log('检测邮箱');
      return this;
    },
    checkPassword: function() {
      console.log('检测密码');
      return this;
    }
  }
}

CheckObject().checkNames().checkEmails().checkPassword();

// 定义一个对函数添加多个方法的addMethods方法
  Function.prototype.addMethods = function(name, fn){
    this[name] = fn;
    return this;
  };

  var methods = function() {};
  methods.addMethods('checkNames',function() { 
    console.log('检测姓名');
    return this;
  })
  .addMethods('checkEmails',function() {
   console.log('检测邮箱');
   return this; 
  })
  .addMethods('checkPassword',function() { 
    console.log('检测密码');
    return this; 
  });

methods.checkNames().checkEmails().checkPassword();