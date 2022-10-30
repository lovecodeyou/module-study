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