'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//默认暴露 == 仅能写一次，不能写多个
exports.default = {
    moduleName: 'module3',
    version: 'v1.1.0',
    getModuleInfo: function getModuleInfo() {
        return this.moduleName + ':' + this.version;
    }
};