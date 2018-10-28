function addEvent(dom, type, fn) {
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false);
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn);
  } else {
    dom['on' + type] = fn;
  }
}

var getEvent = function(event) {
  return event || window.event;
}

var getTarget = function(event) {
  var event = getEvent(event);
  return event.target || event.srcElement;
}

var preventDefault = function(event) {
  var event = getEvent(event);

  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}


addEvent(document.querySelector("#asd"), 'click', function(e) {
  preventDefault(e);

  if (getTarget(e) !== document.querySelector("#asd")) {
    console.log(123);
  } else {
    console.log(456);
  }
})