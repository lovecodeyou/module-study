(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module/module1":2,"./module/module2":3,"./module/module3":4,"./module/module4":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo1 = foo1;
exports.bar1 = bar1;
//分别暴露
function foo1() {
    console.log("module1：foo1 invoked");
}

function bar1() {
    console.log("module1：bar1 invoked");
}

var info = exports.info = 'module1';
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//统一暴露、常规暴露
function foo2() {
    console.log("module1：foo invoked");
}

function bar2() {
    console.log("module1：foo2 invoked");
}

var info = 'module2';

exports.info = info;
exports.foo2 = foo2;
exports.bar2 = bar2;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

//默认暴露 == 仅能写一次，不能写多个
exports.default = function () {
    console.log("module3的箭头函数被调用");
};
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//默认暴露 == 仅能写一次，不能写多个
exports.default = {
    moduleName: 'module3',
    version: 'v1.1.0',
    getModuleInfo: function getModuleInfo() {
        return this.moduleName + ':' + this.version;
    }
};
},{}]},{},[1]);
