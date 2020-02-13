'use strict';

var sayHello = function sayHello(message) {
  alert(message);
};

var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log('hello ts');
    };
    return Greeter;
}());

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

var css = "body {\n  background: red;\n}\n.container {\n  width: 300px;\n  height: 300px;\n  background-color: black;\n}";
styleInject(css);

var container = "<div class=\"container\" style=\"color: red\">\u5185\u5BB9</div>";
document.getElementById("container").innerHTML = container;
var a = new Greeter();
a.greet();
sayHello('Hello from Rollup and lodash: ');
