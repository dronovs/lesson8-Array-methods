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
arrThree.push('x');

for (let i = 0; i <= 4; i++) {
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