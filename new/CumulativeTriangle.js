function cumulativeTriangle (n) {
    let rowNumber = 1;
    if (n == 1) return 1

    const cumulate = (start, itrLen) => {
        rowNumber++;
        let nextNum = start;
        let sum = 0;
        let i = 0;
        while (i < itrLen) {
            nextNum++;
            sum+=nextNum;
            i++;
        };
        if (rowNumber == n) return sum
        return cumulate(nextNum, itrLen + 1);
    };
    return cumulate(1, 2);
};

function cumulativeTriangle (n) {
    let rowNumber = 1;
    if (n == 1) return 1
    let itrLen = 2;
    let sum = 0;
    let nextNum = 1;
    while (rowNumber < n) {
        rowNumber++;
        sum = 0;
        let i = 0;
        while (i < itrLen) {
            nextNum++;
            sum+=nextNum;
            i++;
        };
        itrLen++;
    };
    return sum;
};

function cumulativeTriangle(n) {
    return (n * (n**2  + 1)) / 2;
};


console.log(cumulativeTriangle(4));
