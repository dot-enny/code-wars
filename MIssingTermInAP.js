function findMissing (arr) {
    let firstDiff = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff == (firstDiff/2)) return arr[0] + diff;
        if (diff == (firstDiff*2)) return arr[i] + firstDiff;
    };
};

let arr = [1, 3, 5, 9, 11];
console.log(findMissing(arr))

