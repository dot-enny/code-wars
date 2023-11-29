function arrayDiffLessEfficient(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let isUnique = true;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            result.push(a[i]);
        }
    }
    return result;
}

let arr1 = [1, 2, 3, 4, 6, 9, 10];
let arr2 = [1, 2, 6, 9, 10];
console.log(arrayDiff(arr1, arr2))
console.log(arrayDiffLessEfficient(arr1, arr2))