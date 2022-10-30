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