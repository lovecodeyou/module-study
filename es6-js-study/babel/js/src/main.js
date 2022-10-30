//分别暴露、常规暴露使用的接收方式 == 解构获取
//语法1： import {模块暴露的东西名字} from '路径'

//默认暴露方式使用的接收方式
//语法2： import 接收的名字 from '路径'



import {foo1,bar1} from './module/module1'
import { foo2,bar2,info } from './module/module2'

import module3Content from './module/module3'

import module4Content from './module/module4'


console.log("")
foo1()
bar1()

console.log("")
foo2();
bar2();
console.log(info)

console.log("")
module3Content();


console.log("")
console.log(module4Content.getModuleInfo())