function findDuplicateLessEfficient(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    // If no duplicates are found
    return null;
    // O(n^2)
}



const arr = [3, 2, 5, 1, 3, 4]
console.log(findDuplicateLessEfficient(arr));