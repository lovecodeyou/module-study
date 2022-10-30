//定义、暴露模块
define(function (require) {

    // console.log(require)
    // let moduleObj = require('./module1')
    console.log(require)
    let moduleObj = require('noRelyModuleObj')


    let version = 'v1.3.4';
    let moduleName = 'commonjsModule4'

    function getInfo4() {
        // return `${moduleName}:${version} ==> 依赖的模块${moduleObj.foo()}`
        return `${moduleName}:${version} ==> 依赖的模块${moduleObj.getModuleInfo()}`
    }

    let exports = require('exports')
    exports.getInfo4 = getInfo4
    exports.getInfo4_1 = getInfo4
    // module.exports = {
    //     getInfo3:getInfo3
    // }
})