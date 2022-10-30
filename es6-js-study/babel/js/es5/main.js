'use strict';

var _module = require('./module/module1');

var _module2 = require('./module/module2');

var _module3 = require('./module/module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module/module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//分别暴露、常规暴露使用的接收方式 == 解构获取
//语法1： import {模块暴露的东西名字} from '路径'

//默认暴露方式使用的接收方式
//语法2： import 接收的名字 from '路径'


console.log("");
(0, _module.foo1)();
(0, _module.bar1)();

console.log("");
(0, _module2.foo2)();
(0, _module2.bar2)();
console.log(_module2.info);

console.log("");
(0, _module4.default)();

console.log("");
console.log(_module6.default.getModuleInfo());