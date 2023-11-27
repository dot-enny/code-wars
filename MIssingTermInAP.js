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

function findMissing2 (arr) {
    let commonDiff = (arr[arr.length - 1] - arr[0]) / arr.length;
    
    for (let i = 1; i < arr.length; i++) {
        let expectedValue = arr[i - 1] + commonDiff;
        if (arr[i] != expectedValue) return expectedValue;
    };
};

console.log(findMissing2(arr))

















// function findMissingFormer (arr) {
//     let diffHash = {};
//     let maxDiff = 0;
//     let minDiff = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         let diff = arr[i + 1] - arr[i];
//         maxDiff = diff > maxDiff ? maxDiff = diff : maxDiff = maxDiff;
//         minDiff = diff < minDiff ? minDiff = diff : minDiff = minDiff;
//         diffHash[diff] ? diffHash[diff] = diffHash[diff] + 1 : diffHash[diff] = 1
//     }

//     for (let i = 0; i < arr.length - 1; i++) { 
//         let diff = arr[i + 1] - arr[i] != maxDiff ? arr[i + 1] - arr[i] : arr[i] - arr[i - 1];;
//         if (arr[i + 1] - arr[i] == maxDiff) return arr[i] + maxDiff - diff; 
//     }

// }