function findTerms (a, d, n) {
    let result = [a];
    for (let i = 1; i < n; i++) {
        result.push(result[i - 1] + d);
    };
    return result.join(', ');
};
let args = [1, 2, 3]
console.log(findTerms(...args))

function findTerms2(a, r, n) {
    var ret = [a];
    while (--n) {
      ret.push(a += r);
      console.log(a)
    }
    return ret.join(', ');
}

  console.log(findTerms2(...args))