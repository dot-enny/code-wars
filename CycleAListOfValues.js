function cycle (dir, list, curr) {
    if (!list.includes(curr)) return null;
    let currIdx = list.indexOf(curr);

    if(dir == -1) {
        /** if there is a number before curr,
         * CHECK PROCESS
         * check if the number is equal to curr using while loop,
         * if the number is equal to curr decrement currIdx and use it to check the number before that,
         * repeat till you get to a number that is not equal to curr, exit loop and return it
        */
        if (list[currIdx - 1]) {
            while(list[currIdx] == list[currIdx - 1]) currIdx--;
            return list[currIdx - 1];
        } else {
            /** if there is no number before curr, move to the last number in the list and run CHECK PROCESS */
            currIdx = list.length - 1;
            while(list[currIdx] == list[0]) currIdx--;
            return list[currIdx];  
        }
    } 
    if (dir == 1) {
        /** if there is a number after curr, run CHECK PROCESS with currIdx incrementing instead of decrementing */
        if(list[currIdx + 1]) { 
            while(list[currIdx] == list[currIdx + 1]) currIdx++;
            return list[currIdx + 1]
        } else {
            /** if there is no number after curr, move to the first number in the list, run CHECK PROCESS with currIdx incrementing instead of decrementing */
            currIdx = 0;
            while(list[list.length - 1] == list[currIdx]) currIdx++;
            return list[currIdx]
        }
    }
};

function cycle2 (dir, list, curr) {
    let currIdx = list.indexOf(curr);
    return currIdx ? null : list[(currIdx + dir + list.length) % list.length]
};

list = [1, 2, 3]
dir = -1;
curr = 1;
console.log(cycle2(dir, list, curr))
