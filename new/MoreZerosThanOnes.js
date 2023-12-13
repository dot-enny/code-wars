function moreZeros (str) {
    let newStr = [];
    let checkingHash = {};

    const checkIfSatisfied = (charOfStr) => {
        const asciiValue = charOfStr.charCodeAt(0);
        const binaryRepresentation = asciiValue.toString(2);
        let zeros = 0;
        let ones = 0;
         for (let i = 0; i < binaryRepresentation.length; i++) {
            if (binaryRepresentation[i] == 0) zeros++
            else ones++
        };
        if (zeros > ones) return true
        else return false;
    };
    
    for (let i = 0; i < str.length; i++) {
        if (checkIfSatisfied(str[i]) && !checkingHash[str[i]]) {
            checkingHash[str[i]] = 1;
            newStr.push(str[i]);
        };
    };

    return newStr;
};


function moreZeros(str) {
    const uniqueChars = new Set();

    for (let char of str) {
        const binaryRepresentation = char.charCodeAt(0).toString(2);
        const zeros = binaryRepresentation.split('0').length - 1;
        const ones = binaryRepresentation.split('1').length - 1;

        if (zeros > ones) {
            uniqueChars.add(char);
        }
    }

    return Array.from(uniqueChars);
};


// POSTED

console.log(moreZeros(nameStr));
console.timeEnd(moreZeros(nameStr));
