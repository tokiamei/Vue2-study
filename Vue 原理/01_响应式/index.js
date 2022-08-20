function updateView() {
    console.log("视图更新了！！！")
}

// 重新定义数组原型，创建新对象，原型指向 Array.prototype，再扩展新的方法不会影响原型
const arrProto = Object.create(Array.prototype)
;["push", "pop", "shift", "unshift", "splice", "sort"].forEach(methodName => {
    arrProto[methodName] = function() {
        updateView() // 触发视图更新
        Array.prototype[methodName].call(this, ...arguments)
    }
})

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 深度监视
    observe(value)
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newVal) {
            if (newVal !== value) {
                observe(newVal)
                value = newVal
                updateView()
            }
        }
    })

}

// 监听
function observe(target) {
    if (typeof target !== "object" || null) {
        // console.log(target)
        return target       
    }
    if (Array.isArray(target)) {
        target.__proto__ = arrProto
    }
    for (let key in target) {
        defineReactive(target, key, target[key])
        // console.log(key)
    }
}


const obj = { name: "天尊", age: 99, h: { x: 100, y: 200}, arr: [3, 2, 3, 2] }
observe(obj)
// obj.arr.push("我是新数组元素")
// obj.name = "混沌魔君"
obj.arr.pop()