function nthterm (first, n, c) {
    let i = 0;
    let term = first;
    while(i < n) {
        term+=c;
        i++;
    }
    return term;
    // BigO(n)
};

let args = [1, 2, 1];
console.log(nthterm(...args));

function nthterm2 (first, n, c){
    return first + (n * c);
    // BigO(1)
};

console.log(nthterm2(...args));