function hasArithmProg (arr) {
    if (arr.length < 3) return undefined;
    let entireArrIsAP = true;
    let containsAP = false;

    for (let i = 0; i < arr.length - 2; i++) {
        let diff = arr[i + 1] - arr[i]
        let nextDiff = arr[i + 2] - arr[i + 1]
        if (entireArrIsAP == true && diff != nextDiff) entireArrIsAP = false;
        if (containsAP == false && diff == nextDiff) containsAP = i == 0 ? '0' : i;
    };

    return entireArrIsAP || containsAP || false;
};

let arr = [9, 5, 1];
console.log(hasArithmProg(arr));
arr = [9, 1, 2 ,14 ,46];
console.log(hasArithmProg(arr))
arr = [1, 7, 2, 3, 2];
console.log(hasArithmProg(arr))

