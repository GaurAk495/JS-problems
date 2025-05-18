const array = [1829, 1231, 453, 245, 23, 78, 45, 3435]

const largestNum = array.reduce((acc, next) => {
    return next > acc ? next : acc
}, 0)

console.log(largestNums)

//what if i want 2nd largest Number?

const sortArray = array.sort((a, b) => a + b)
console.log(sortArray[1])

//what i dont know this sort then how

const sortArray1 = array.reduce((acc, next) => {
    const index = acc.findIndex((item) => {
        return item > next
    })
    if (index == -1) {
        acc.push(next)
    } else {
        acc.splice(index, 0, next)
    }
    return acc
}, [])

console.log(sortArray1)