function nameInStr (str, name) {
    str = str.toLowerCase();
    name = name.toLowerCase();
    let strIterator = 0;
    let nameIterator = 0;
    let checkMatch = '';
    while (strIterator < str.length && nameIterator < name.length) {
        let currentlyOn = str[strIterator];
        let lookingFor = name[nameIterator];
        let isFound = currentlyOn == lookingFor;
        if (isFound) {
            checkMatch+=currentlyOn;
            nameIterator++;
        };
        strIterator++;
    };
    if (checkMatch == name) {
        return true;
    } else {
        return false;
    };
};

function nameInStr(str, name){
    name = name.toLowerCase()
    str = str.toLowerCase()
    let index = 0
    for (const char of str) {
      if (char === name[index])
        index++
    };
    return index === name.length;
};

let args = ["Across the rivers", "chris"];
console.log(nameInStr(...args));