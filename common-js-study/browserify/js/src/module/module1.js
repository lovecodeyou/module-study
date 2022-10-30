//require获取的是一个对象
module.exports = {
    msg: 'module1',
    foo: function () {
        return this.msg;
    },
}