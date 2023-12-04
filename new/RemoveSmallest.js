function removeSmallest(numbers) {
    let result = [...numbers];

    let smallest = result[0];
    for (let i = 0; i < result.length; i++) {
        if (result[i] < smallest) smallest = result[i];
    };
    let idxOfSmallest = result.indexOf(smallest);
    result.splice(idxOfSmallest, 1);
    return result;
};

/** its a requirement to not mutate the original array, 
 * to make the solution more efficient, you don't need to create a copy of the array 
 * you can also modify the logic for finding the smallest number */

function removeSmallest(numbers) {
    let idxOfSmallest = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[idxOfSmallest]) idxOfSmallest = i;
    };

    numbers.splice(idxOfSmallest, 1);
    return numbers;
};

let arr = [1, 2, 0, 3, 4, 5];
console.log(removeSmallest(arr))