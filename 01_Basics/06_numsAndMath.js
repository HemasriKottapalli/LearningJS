// const score = 400;
// console.log(score);
// const balance = new Number(100); //100% number
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const aNum = 123.45678;
// console.log(aNum.toPrecision(4));  

// #********Maths**********#

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.4));
console.log(Math.min(4,3,56,9));
console.log(Math.max(4,3,56,9));

console.log(Math.random()); //gives values from 0 to 1 

//Formula to generate random numbers in a fixed range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
