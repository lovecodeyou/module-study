//定义、暴露模块
define('hasNameModule', [], function () {

    let version = 'v1.3.1';
    let moduleName = 'hasNameModule'

    function getInfo() {
        return `${moduleName}:${version}`
    }

    return {
        getInfo: getInfo
    }
})