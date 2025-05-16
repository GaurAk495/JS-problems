// Input: arr = [1, 2, 3, 4, 5], size = 1
// Output: [[1], [2], [3], [4], [5]]


// Input: arr = [8, 5, 3, 2, 6], size = 6
// Output: [[8, 5, 3, 2, 6]]

// Input: arr = [], size = 1
// Output: []

arr = [1, 2, 3, 4, 5]
size = 4
function chunkArray(arr, size) {
    let result = []
    for (let i = 0; i < arr.length; i = i + size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}

console.log(chunkArray(arr, size))