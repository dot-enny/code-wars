function organize (arr) {
    if (arr.length < 1) return [];
    let organizedArr = [];
    let checked = new Set();
    for (const num of arr) {
        let subArr = []; 
        for (const search of arr) {
            if(!checked.has(num) && num == search) subArr.push(search);
        }
        if (subArr.length > 0) organizedArr.push(subArr);
        checked.add(num);
    };
    return organizedArr;
};

let arr = [3, 2, 6, 2, 1, 3];
console.log(organize(arr));

function organize2 (arr) {
    arr = arr.reduce((result, num) => {
        !result.has(num) ? result.set(num, [num]) : result.get(num).push(num);
        return result;
    }, new Map()).values();

    return [...arr];
};

arr = [3, 2, 6, 2, 1, 3];
console.log(organize2(arr));

// POSTED