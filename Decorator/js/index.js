var decorator = function (input, fn) {
  var input = document.getElementById(input);
  if (typeof input.onclick === 'function') {
    var oldClickFn = input.onclick;
    input.onclick = function () {
      oldClickFn();
      fn();
    }
  } else {
    input.onclick = fn;
  }
}

decorator('name_input', function () {
  document.getElementById('name_demo_text').style.display = 'none';
})