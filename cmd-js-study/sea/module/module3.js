define(function(require,exports,module) {

    let module1 = require('./module1')
    let module2 = require('./module2')

    let moduleName = "module1"
    let version = '1.1.1'

    exports.getModuleInfo = function () {
        return `${moduleName}:${version} ===γ δΎθ΅${module1.getModuleInfo()}γ${module2.getModuleInfo()}`
    }
})