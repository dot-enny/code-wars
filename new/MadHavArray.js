function isMadhavArray(arr) {
    if (arr.length < 2) return false;

    let startIdx = 1;
    let sum = 0;
    let count = 2;

    while (startIdx < arr.length) {
        for (let i = 0; i < count; i++) {
            if (startIdx >= arr.length) return false
            sum += arr[startIdx];
            startIdx++;
        }

        if (sum !== arr[0]) return false

        sum = 0;
        count++;
    };

    return true;
};

console.log(isMadhavArray([2, 1, 1, 4, -1, -1]));
console.log(isMadhavArray([2, 1, 1, 4, -1, 1]));
