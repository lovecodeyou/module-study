//定义、暴露模块
define(['require','noRelyModuleObj'], function (require) {

    // console.log(require)
    // let moduleObj = require('./module1')
    console.log(require)
    let moduleObj = require('noRelyModuleObj')


    let version = 'v1.3.1';
    let moduleName = 'commonjsModule'

    function getInfo2() {
        // return `${moduleName}:${version} ==> 依赖的模块${moduleObj.foo()}`
        return `${moduleName}:${version} ==> 依赖的模块${moduleObj.getModuleInfo()}`
    }

    return {
        getInfo2: getInfo2
    }
})