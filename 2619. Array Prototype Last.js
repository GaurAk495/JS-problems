// Input: nums = [null, {}, 3]
// Output: 3

// Input: nums = []
// Output: -1

const arr = [1, 2, 3, 4]

function lastItem() {
    const last = this[this.length - 1];
    return last !== undefined ? last : -1;
}

console.log(lastItem(arr))