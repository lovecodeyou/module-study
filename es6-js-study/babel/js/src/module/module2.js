//统一暴露、常规暴露
function foo2() {
    console.log("module1：foo invoked")
}


function bar2() {
    console.log("module1：foo2 invoked")
}


let info = 'module2'


export {
    info,
    foo2,
    bar2
}