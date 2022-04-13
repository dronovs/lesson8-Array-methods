'use strict'
//1
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const updatedArr = arrOne.concat(arrTwo);
console.log(updatedArr);

//2
const reversedArr = arrOne.reverse();
console.log(reversedArr);

//3
const arrThree = [1, 2, 3];
arrThree.push(4, 5, 6);
console.log(arrThree);

//4
const arrFour = [1, 2, 3];
arrFour.unshift(4, 5, 6);
console.log(arrFour);

//5
const arrFive = ['js', 'css', 'jq'];
console.log(arrFive[0]);

//6
console.log(arrFive[arrFive.length - 1]);

//7
const arrSix = [1, 2, 3, 4, 5];
const arrSixFiltered = arrSix.filter((item) => item <= 3);
console.log(arrSixFiltered);

//8
const arrSeven = [1, 2, 3, 4, 5];
const arrSevenFiltered = arrSeven.filter((item) => item > 3);
console.log(arrSevenFiltered);

//9
const arrEight = [1, 2, 3, 4, 5];
arrEight.splice(1,2);
console.log(arrEight);

//10
const arrNine = [1, 2, 3, 4, 5];
const arrNineFiltered = arrNine.filter((item) => item > 1 && item < 5);
console.log(arrNineFiltered);

//11
const arrTen = [1, 2, 3, 4, 5];
arrTen.splice(3, 0, 'a', 'b', 'c');
console.log(arrTen);

//12
const arrEleven = [1, 2, 3, 4, 5];
arrEleven.splice(1, 0, 'a', 'b');
arrEleven.splice(6, 0, 'c');
arrEleven.splice(arrEleven.length, 0, 'e');
console.log(arrEleven);

//13
const arrTwelve = [3, 4, 1, 2, 7];
arrTwelve.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
});
console.log(arrTwelve);

//14
const arrThirteen = [5, 6, 7, 8, 9];
const arrThirteenSum = arrThirteen.reduce((a, b) => {
    return a + b;
}, 0);
console.log(arrThirteenSum);

//15
const arrFourteen = [5, 6, 7, 8, 9];
const arrFourteenSqrt = arrFourteen.reduce((item, nextItem) => item + nextItem**2, 0);
console.log(arrFourteenSqrt);

//16
const arrFifteen =  [1,-3, 5, 6,-7, 8, 9,-11];
const arrFifteenFiltered = arrFifteen.filter(item => item < 0);
console.log(arrFifteenFiltered);

//17
const arrSixteen =  [1,-3, 5, 6,-7, 8, 9,-11];
const arrSixteenFiltered = arrSixteen.filter(item => item % 2 === 0);
console.log(arrSixteenFiltered);

//18
const arrSeventeen = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arrSeventeenFiltered = arrSeventeen.filter(item => item.length > 5);
console.log(arrSeventeenFiltered);

//19
const arrEighteen = [1, 2, [3, 4], 5, [6, 7]];
const arrEighteenFiltered = arrEighteen.filter(item => Array.isArray(item));
console.log(arrEighteenFiltered);

//20
const arrNineteen = [5,-3, 6,-5, 0,-7, 8, 9];
const arrNineteenCounter = arrNineteen.filter(item => item < 0).length;
console.log(arrNineteenCounter);