import sayHello from './modules/MyModule';
import Greeter from './modules/Greeter.ts';
import './style.css';

const container = '<div class="container" style="color: red">内容</div>';
document.getElementById('container').innerHTML = container;

const a = new Greeter();
a.greet();

sayHello('Hello from Rollup and lodash: ');
