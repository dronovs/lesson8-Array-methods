'use strict'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function indexOfElem (arr, item) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === item) return i;
    }
}


function lastIndexOfElem (arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) return i;
    }
}


function findElem (arr, item) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === item) return true;
    }
    return undefined;
}


function findIndexOfElem (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return i;
    }
    return -1;
}

function includesElem (arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true;
    }
    return false;
}


function everyElem (func, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], 0)) return false;
    }
    return true;
}
const everyVar = everyElem(num => num >= 1, array);


function someElem (func, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], 0)) return true;
    }
    return false;
}
const someVar = someElem(num => num > 100, array);

console.log(indexOfElem(array, 5), 'log fot INDEXOF method');
console.log(lastIndexOfElem(array, 6), 'log fot LASTINDEXOF method');
console.log(findElem(array, 9), 'log fot FIND method');
console.log(findIndexOfElem(array, 3), 'log fot FINDINDEXOF method');
console.log(includesElem(array, 11), 'log fot INCLUDES method');
console.log(everyVar, 'log of EVERY method');
console.log(someVar, 'log of SOME method');