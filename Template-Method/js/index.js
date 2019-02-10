var Alert = function (data) {
  if (!data) {
    return;
  }
  this.content = data.content;
  this.panel = document.createElement('div');
  this.contentNode = document.createElement('p');
  this.confirmBtn = document.createElement('span');
  this.closeBtn = document.createElement('b');
  this.panel.className = 'alert';
  this.closeBtn.className = 'a-close';
  this.confirmBtn.className = 'a-confirm';
  this.confirmBtn.innerHTML = data.confirm || '确认';
  this.contentNode.innerHTML = this.content;
  this.success = data.success || function() {};
  this.fail = data.fail || function() {};
}

Alert.prototype = {
  init: function() {
    this.panel.appendChild(this.closeBtn);
    this.panel.appendChild(this.contentNode);
    this.panel.appendChild(this.confirmBtn);
    document.body.appendChild(this.panel);
    this.bindEvent();
    this.show();
  },
  bindEvent: function() {
    var me = this;
    this.closeBtn.onclick = function() {
      me.fail();
      me.hide();
    }
    this.confirmBtn.onclick = function() {
      me.success();
      me.hide();
    }
  }
}