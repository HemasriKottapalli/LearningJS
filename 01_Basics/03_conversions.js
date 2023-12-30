let score = "33";

console.log(typeof(score)); // typeof || typeof() both valid syntax

let convertedToNumber = Number(score);

console.log(typeof(convertedToNumber));

/*
    Notes:
    
    "33" on change => 33
    "abc" on change => NaN
    true => 1 and false => 0
    null => 0
    undefined => Nan

*/

//Boolean conersions

let isPresent = 1;
let ans = Boolean(isPresent);
console.log(ans);

/*
    NOTES:

    1 => true and 0 => false
    "" => false
    "something" => true
*/

//OPERATIONS
let num = 3;
let negNum = -num;

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1 = "Hello..";
let str2 = "Hema!";
console.log(str1+str2);