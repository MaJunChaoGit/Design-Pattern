// 适配异类框架  A 和 jQuery
var A = A || {};

A.g = function (id) {
  return document.getElementById(id);
}

A.on = function (id, type, fn) {
  var dom = typeof id === 'string' ? this.g(id) : id;
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  } else {
    dom.on['on' + type] = fn;
  }
}

// 如何调用
A.on(window, 'load', function () {
  A.on('myButton', 'click', function () {
    // do something
  });
});

// 参数适配器
function arrToObjAdapter(arr) {
  return {
    name: arr[0],
    type: arr[1],
    title: arr[2],
    data: arr[3],
  }
}

// 如何调用
var arr = ['JavaScript', 'book', '前端编程语言', '8月1日'];
var adapterData = arrToObjAdapter(arr);

// 服务器端数据适配
function ajaxAdapter(data) {
  return [data['key1'], data['key3'] ,data['key3']];
}

$.ajax({
  url: 'test.do',
  success: function (data, status) {
    doSomething(arrToObjAdapter(data));
  }
});
