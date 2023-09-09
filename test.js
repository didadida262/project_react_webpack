
const obj = {
    a: 100,
    b: {
        x: 1000
    },
    c: [1,2,3,4]
}

// 浅拷贝
// 方1
// const obj2 = {
//     ...obj
// }

// obj2.b.x = 10
// console.log(obj)
// { a: 100, b: { x: 10 }, c: [ 1, 2, 3, 4 ] }

// 方2

const clone = (obj) => {
    const res = {}
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue
        res[key] = obj[key]
    }
    return res
}

// const res = clone(obj)
// res.b.x = 5555555555
// console.log('obj', obj)
// obj { a: 100, b: { x: 5555555555 }, c: [ 1, 2, 3, 4 ] }


// 深拷贝
const deepClone = (obj) => {
    const res = {}
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue
        // 还有Date、正则等特殊类型
        if (Array.isArray(obj[key])) {
            res[key] = obj[key].map((item) => {
                if (typeof item === 'object') {
                    return deepClone(item)
                } else {
                    return item
                }
            })
        } else if (typeof obj[key] === 'object') {
            res[key] = deepClone(obj[key])
        } else {
            res[key] = obj[key]
        }
    }
    return res
}

const res = deepClone(obj)
res.c[0] = 222222222222222222
console.log('res',res)
console.log(obj)
// res {
//     a: 100,
//     b: { x: 222222222222222200 },
//     c: { '0': 1, '1': 2, '2': 3, '3': 4 }
//   }
//   { a: 100, b: { x: 1000 }, c: [ 1, 2, 3, 4 ] }