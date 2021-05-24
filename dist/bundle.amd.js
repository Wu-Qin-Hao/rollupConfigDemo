
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
define(function () { 'use strict';

  var sayHello = function sayHello(message) {
    // alert(message);
    console.log('wqh');
  };

  var Greeter = /** @class */ (function () {
      function Greeter(message) {
          this.greeting = message;
      }
      Greeter.prototype.greet = function () {
          console.log('dog');
          console.log('----------------------------');
          console.log('hello ts');
      };
      return Greeter;
  }());
  //# sourceMappingURL=Greeter.js.map

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "body {\r\n  background: red;\r\n}\r\n.container {\r\n  width: 300px;\r\n  height: 300px;\r\n  background-color: black;\r\n}";
  styleInject(css);

  // import sayHello from './modules/MyModule';
  var container = '<div class="container" style="color: red">内容</div>';
  document.getElementById('container').innerHTML = container;
  var a = new Greeter();
  a.greet();
  sayHello();

});
