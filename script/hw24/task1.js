'use strict'

//1
const arr = ['a', 'b', 'c', 'd'];
const ab = arr.splice(0, 2).join('+');
const cd = arr.splice(0,2).join('+');
const concatAbcd = ab.concat(',', cd );

console.log(concatAbcd);

//2
const arrOne = [2, 5, 3, 9];
const firstArr = arrOne.splice(0,2);
const firstMultiply = firstArr.reduce((item, nextItem) => item * nextItem, 1);
const secondArr = arrOne.splice(0, 2);
const secondMultiply = secondArr.reduce((item, nextItem) => item * nextItem, 1);
const result = firstMultiply + secondMultiply;
console.log(result);

//3
const arrTwo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrTwo[1][0]);

//4
const obj = {
    js: ['jQuery','Angular'],
    php: 'hello',
    css: 'world'
}

console.log(obj.js[0]);

//5
const arrThree = [];

for (let i = 0; i <= 4; i++) {
    if (arrThree.length === 0) arrThree.push('x');
    arrThree.push(arrThree[i] + 'x');
}

console.log(arrThree);

//6
let arr11 = []
let num = 1;
let elem = '1';

for (; num <= 5; num++) {
    elem = elem + '1';
    if (num <= 1) arr11.push(num);

    if (num > 1) arr11.push(Number(elem) * num);
}

console.log(arr11);

//7
function arrayFill (sym = '*', num = 1) {
    if (typeof(sym) !== 'string' ) return 'Argument is not a string';
    if (num < 1) return 'Argument error';

    let someArr = [];

    for (let i = 1; i <= num; i++ ) {
        someArr.push(sym);
    }
    return someArr;
}

console.log(arrayFill('*', 5));

//8

const arrayOfNumbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let counter = 0;
let numbersSum = 0;

for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
    numbersSum += arrayOfNumbers[i];
    counter++;
    if (numbersSum > 10) break;
}

console.log(counter);

//9
const arrayOfNumbers1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArr (arr) {
    let newArr = [];

    for (let i = arrayOfNumbers1.length - 1; i >= 0 ; i--) {
        newArr.push(arrayOfNumbers1[i]);
    }

    return newArr;
}

console.log(reverseArr(arrayOfNumbers1));

//10
const arrFour = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
let arrSum = 0;

for (let i = 0; i <= arrFour.length - 1; i++) {
    for (let c = 0; c <= arrFour[i].length - 1; c++) {
        arrSum += arrFour[i][c];
    }
}

console.log(arrSum);

//11
const arrFive =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let arrFiveSum = 0;

for (let i = 0; i <= arrFive.length - 1; i++) {
    let arrElem = arrFive[i];
    if (!Array.isArray(arrElem)) arrFiveSum += arrElem;
    if (Array.isArray(arrElem)) {
        for (let c = 0; c <= arrElem.length - 1; c++) {
            let arrInnerElem = arrElem[c];
            if (Array.isArray(arrInnerElem)) {
                for (let j = 0; j <= arrInnerElem.length - 1; j++) {
                    if (!Array.isArray(arrInnerElem)) arrFiveSum += arrInnerElem;
                    if (Array.isArray(arrInnerElem))arrFiveSum += arrInnerElem[j];
                }
            }

        }
    }
}
console.log(arrFiveSum);

console.log(arr11);
