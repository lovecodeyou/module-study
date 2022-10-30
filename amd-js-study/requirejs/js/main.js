(function (){

    //定义系统中使用的模块信息
    // requirejs.config({
    require.config({
        paths: {
            //不用加后缀js，否则会报错
            hasRelyModule: './module/hasRelyModule',
            noRelyModule: './module/noRelyModule',
            noRelyModuleObj: './module/noRelyModule',
            hasNameModule: './module/hasNameModule',
            commonjsModule: './module/commonjsModule',
            commonjsModule2: './module/commonjsModule2',
            commonjsModule3: './module/commonjsModule3',
            commonjsModule4: './module/commonjsModule4',
            notAmdSpecificationOrdinaryJs: './module/ordinaryJs',
            underscore: './lib/underscore.1.9.1',
            underscoreHandleImport: './lib/underscore.1.9.1',
        },
        shim: {
            notAmdSpecificationOrdinaryJs: {
                deps: [],
                exports: "ordinaryJs"  //模块的全局变量名
            },
            underscoreHandleImport: {
                exports: "_"
            }
        }
    });


    //使用模块
    // requirejs(["hasRelyModule", "hasNameModule"], function (hasRelyModule,hasNameModule) {
    require(["hasRelyModule", "hasNameModule", 'commonjsModule','commonjsModule2','commonjsModule3','commonjsModule4','notAmdSpecificationOrdinaryJs','underscore'], function (hasRelyModule,hasNameModule,commonjsModule,commonjsModule2,commonjsModule3,commonjsModule4,notAmdSpecificationOrdinaryJs,_) {
        console.log("")
        console.log(hasRelyModule)
        console.log(hasRelyModule.getCurrentModuleInfo())

        console.log("")
        console.log(hasNameModule)
        console.log(hasNameModule.getInfo())

        console.log("")
        console.log(commonjsModule)
        console.log(commonjsModule.getInfo2())

        console.log("")
        console.log(commonjsModule2)
        console.log(commonjsModule2.getInfo2())

        console.log("")
        console.log(commonjsModule3)
        console.log(commonjsModule3.getInfo3())

        console.log("")
        console.log(commonjsModule4)
        console.log(commonjsModule4.getInfo4())
        console.log(commonjsModule4.getInfo4_1())

        console.log("")
        console.log(notAmdSpecificationOrdinaryJs)
        console.log(notAmdSpecificationOrdinaryJs.getMoudleInfo())

        console.log("")
        console.log(_)
        console.log(_.first([4,5,6,7]))

    })

})();