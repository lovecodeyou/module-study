//定义、暴露模块
define(['require','exports','noRelyModuleObj','module'],function (require,exports,module) {

    // console.log(require)
    // let moduleObj = require('./module1')
    console.log(require)
    let moduleObj = require('noRelyModuleObj')


    let version = 'v1.3.3';
    let moduleName = 'commonjsModule3'

    function getInfo3() {
        // return `${moduleName}:${version} ==> 依赖的模块${moduleObj.foo()}`
        return `${moduleName}:${version} ==> 依赖的模块${moduleObj.getModuleInfo()}`
    }

    exports.getInfo3 = getInfo3
    // module.exports = {
    //     getInfo3:getInfo3
    // }
})