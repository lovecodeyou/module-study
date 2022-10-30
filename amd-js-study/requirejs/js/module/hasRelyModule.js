//定义、暴露模块
define(['noRelyModuleObj'], function (noRelyModuleObj) {

    let version = 'v1.2.1';
    let moduleName = 'hasRelyModule'

    function getCurrentModuleInfo() {
        return `${moduleName}:${version} === 使用到的依赖模块信息为：${noRelyModuleObj.getModuleInfo()}`
    }

    return {
        getCurrentModuleInfo: getCurrentModuleInfo
    }
})