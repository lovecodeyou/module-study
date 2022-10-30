//默认暴露 == 仅能写一次，不能写多个
export  default {
    moduleName: 'module3',
    version: 'v1.1.0',
    getModuleInfo: function () {
        return `${this.moduleName}:${this.version}`
    }
}