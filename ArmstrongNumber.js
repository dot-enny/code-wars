function narcissistic (number) {
    let result = 0;
    number = number.toString()
    for (let num of number) {
        result += num ** number.length;
    };
    return result == number ? true : false;
};

console.log(narcissistic(16))