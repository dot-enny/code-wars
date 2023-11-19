function ArithmeticSequenceSum (a, r, n) {
    let sum = a;
    let i = 1;
    while (i < n) {
        sum = sum + a + r * i;
        i++;
    };
    return sum;
    // BigO(n)
};

let args = [2, 3, 5];
console.log(ArithmeticSequenceSum(...args));

function ArithmeticSequenceSum2 (a, r, n) {
    return ( n/2 * ( (a * 2) + (n - 1) * r ) );
    // BigO(1)
};

console.log(ArithmeticSequenceSum2(...args));

// const ArithmeticSequenceSum3 = (a, r, n) => a * n + r * n * (n - 1) / 2;



