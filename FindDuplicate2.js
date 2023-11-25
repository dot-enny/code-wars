function findDuplicateEfficient (arr) {
    let set = new Set();
    for (const num of arr) {   
        if (set.has(num)) {
            return num;
        } else {
            set.add(num)
        }
    }
};