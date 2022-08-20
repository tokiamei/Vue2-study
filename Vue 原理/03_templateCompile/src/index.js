// 引入 vue-template-compiler
const compiler = require('vue-template-compiler')

// 插值
const template = `<p>{{message}}</p>`

// 编译
const res = compiler.compile(template)
console.log(res.render); 

/* 
    输出结果：with(this){return _c('p',[_v(_s(message))])}
        this: const vm = new Vue({...}) this 就是 vm
*/