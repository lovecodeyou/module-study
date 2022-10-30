(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//等价 let module1 = require('./module/module1')
let module1 = require('./module/module1.js')
let module2 = require('./module/module2.js')
let module3 = require('./module/module3.js')

// npm install uniq
//等价 let uniqMethod = require('uniq/uniq')
//等价 let uniqMethod = require('uniq')
let uniqMethod = require('uniq/uniq.js')


let module1FooResult = module1.foo();
console.log(module1FooResult)




let module2Result = module2();
console.log(module2Result)


let module3FooResult = module3.foo()
console.log(module3FooResult)

let module3BarResult = module3.bar()
console.log(module3BarResult)



let uniqResult = uniqMethod([1,2,3,4,3,2])
console.log(uniqResult)
},{"./module/module1.js":2,"./module/module2.js":3,"./module/module3.js":4,"uniq/uniq.js":5}],2:[function(require,module,exports){
//require获取的是一个对象
module.exports = {
    msg: 'module1',
    foo: function () {
        return this.msg;
    },
}
},{}],3:[function(require,module,exports){
//require获取的是一个函数
module.exports = function () {
    return 'module2'
}
},{}],4:[function(require,module,exports){
//require.foo函数、require.bar函数
exports.foo = function () {
    return 'foo() module3 invoked'
}

exports.bar = function () {
    return 'bar() module3 invoked'
}


},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
