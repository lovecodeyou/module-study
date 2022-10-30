define(function(require,exports,module) {

    let moduleName = "module1"
    let version = '1.1.1'

    exports.getModuleInfo = function () {
        return `${moduleName}:${version}`
    }
})