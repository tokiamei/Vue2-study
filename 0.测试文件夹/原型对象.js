// 定义一个 构造函数
function Demo() {
    this.a = 1;
    this.b = 2;
}
// 创建一个 Demo 实例对象
const d = new Demo()

console.log(Demo.prototype) // 显示原型对象
console.log(d.__proto__) // 隐式原型对象

Demo.prototype.x = 10
console.log(d.x)
console.log(d.__proto__.x)