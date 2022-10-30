define(function(require) {

    //同步加载
    let module3 = require('./module/module3')
    console.log("")
    console.log(module3)
    console.log(module3.getModuleInfo())

    //异步加载
    let module2 = require.async('./module/module2', function (module2) {
        console.log("")
        console.log(module2)
        console.log(module2.getModuleInfo())
    })
})