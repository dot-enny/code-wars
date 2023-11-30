function searchArray (arrayToSearch, query) {
    if (query.length != 2) throw new Error('query must be an array of length 2')
    let newArr = [];
    for (const arr of arrayToSearch) {
        if (arr.length != 2) throw new Error('children of arrayToSearch must be arrays of length 2')
        newArr = newArr.concat(arr);
    };
    for (let i = 0; i < newArr.length - 1; i+=2) {
        if (newArr[i] == query[0] && newArr[i + 1] == query[1]) return i/2;
    };
    return -1;
};

let args = [ [[1,2],[3,4],[5,6]], [1,2] ];
console.log(searchArray(...args));
args = [ [[1,2],[3,4],[5,6],[7,8,9]], [9,2,1] ];
// console.log(searchArray(...args));
args = [ [[1,2],[3,4],[5,6]], [9,2,1] ];
// console.log(searchArray(...args));
args = [ [1,2,3,4,5,6], [5, 1] ];
// console.log(searchArray(...args));
