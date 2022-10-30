define(function(require,exports,module) {

    let moduleName = "module2"
    let version = '1.1.2'

    module.exports = {
        getModuleInfo: function () {
            return `${moduleName}:${version}`
        }
    }
})