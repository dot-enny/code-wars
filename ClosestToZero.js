function closest (arr) {
    let closestDistance = Number.POSITIVE_INFINITY;
    let closestNum = Number.POSITIVE_INFINITY;
    
    for (let num of arr) {
        let distance = num < 0 ? (0 - num) : ((0 - num) * -1);
        if (distance < closestDistance) {
            closestNum = num;
            closestDistance = distance;
        } else if (distance == closestDistance) {
            if (closestNum == num) closestNum = num;
            if (closestNum == -num) closestNum = null;
        } 
    };

    return closestNum;
}


/** TEST CASES */
let arr = [2, 4, -1, -3];
console.log(closest(arr));
arr = [5, 2, -2];
console.log(closest(arr));
arr = [5, 2, 2];
console.log(closest(arr));
arr = [13, 0, -6];
console.log(closest(arr));
arr = [5, 11, 11, 2, -1, 1];
console.log(closest(arr));
arr = [81, 55, 15, -95, -15, 15];
console.log(closest(arr))

