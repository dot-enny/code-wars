function checkPalindrome (str) {
    let reversedStr = str.split('').reverse().join('');
    if (reversedStr == str) return "OK"
    let newStr = str.split('');
    for (const char in str) {
        newStr.splice(char, 1);
        if (newStr.join('') == newStr.reverse().join('')) return "remove one"
        newStr = str.split('');
    };
    return "not possible";
};

console.log(checkPalindrome('abba'))
console.log(checkPalindrome('abbaa'))
console.log(checkPalindrome('abbaab'))