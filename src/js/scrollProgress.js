var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
  var scrollElement = new Scroll('.progress-line');
  scrollElement.init();
};

var Scroll = function () {
  function Scroll(element) {
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '2px';
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#3a494c';

    _classCallCheck(this, Scroll);

    this.element = element;
    this.height = height;
    this.color = color;
  }

  _createClass(Scroll, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var progressLine = document.querySelector(this.element),
          body = document.body,
          html = document.documentElement;

      var viewportHeight = window.innerHeight,
          documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

      progressLine.style.position = 'fixed';
      progressLine.style.top = 0;
      progressLine.style.left = 0;
      progressLine.style.transition = '0.3s';

      this.scrollTop();

      window.onresize = function () {
        _this.resize(documentHeight, body, html);
      };

      window.onscroll = function () {
        _this.scroll(progressLine, documentHeight, viewportHeight);
      };
    }
  }, {
    key: 'scrollTop',
    value: function scrollTop(scrollFromTop) {
      return scrollFromTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
  }, {
    key: 'resize',
    value: function resize(documentHeight, body, html) {
      return documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }
  }, {
    key: 'scroll',
    value: function scroll(progressLine, documentHeight, viewportHeight) {
      var scroll = this.scrollTop(),
          progress = scroll / (documentHeight - viewportHeight) * 100;

      progressLine.style.width = progress + '%';
      progressLine.style.height = this.height;
      progressLine.style.backgroundColor = this.color;
    }
  }]);

  return Scroll;
}();
