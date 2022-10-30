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