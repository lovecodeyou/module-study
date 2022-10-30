//定义、暴露模块
define(function () {

    let version = 'v1.1.0'
    let moduleName = 'noRelyModule'

    function getModuleInfo() {
        return `${moduleName}:${version}`
    }


    return {
        getModuleInfo:getModuleInfo
    }
})