

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

console.log(moreZeros(nameStr));
console.timeEnd(moreZeros(nameStr));
