// Input: obj = { "x": 5, "y": 42 }
// Output: false

// Input: obj = {}
// Output: true

// Input: obj = [null, false, 0]
// Output: false

var isEmpty = function (obj) {
    const isArray = Array.isArray(obj)
    if (isArray) {
        const arrayLength = obj.length
        return arrayLength ? false : true
    } else {
        const objArray = Object.keys(obj)
        return objArray.length ? false : true
    }
};

console.log(isEmpty({ a: 1 }))