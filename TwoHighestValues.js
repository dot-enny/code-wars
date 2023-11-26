function twoHighest(arr) {
    if (arr.length < 2) return arr;
    let maxNums = [arr[0], arr[1]];

    for (let i = 2; i < arr.length; i++) {
        let num = arr[i];
        // only execute if current num does not equal any of the maxNums
        if (num != maxNums[1] && num != maxNums[0])
        if (num > maxNums[0]) {
            // in maxNums if first minus second is negative, first is smaller, replace first 
            if (maxNums[0] - maxNums[1] < 0) maxNums[0] = num; 
            // if positive, replace second
            else maxNums[1] = num;
        } else if (num > maxNums[1]) {
            maxNums[1] = num;
        };
    };
    // arrange two highest values in descending order
    if (maxNums[0] < maxNums[1]) [maxNums[0], maxNums[1]] = [maxNums[1], maxNums[0]];
    return maxNums;

    // BigO(n)
};


let arr = [];
console.log(twoHighest(arr))
arr = [15];
console.log(twoHighest(arr))
arr = [15, 20, 20, 17];
console.log(twoHighest(arr));
arr = [23643,4565,28848,4092,7007,50761,68108,25385];
console.log(twoHighest(arr));