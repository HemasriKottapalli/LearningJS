//array

const myArr1 = [1,2,3,4,5,6,7,8,9];
//Array is a collection of different elements in a sinngle variable
//Array size can be extended
//indexing is 0 based
//Arrays -> shallow copy (share same reference)
const myArr = new Array(1,2,3,4,5);
console.log(myArr);

//Array Methods

myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

//questioning type of methods
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();
console.log(newArr); //string

//slice, splice
let arr = [1,2,3,4,5,6];
console.log(arr.slice(1,3));
// prints [2,3] and no change in arr
console.log(arr.splice(1,3));
//prints [ 2, 3, 4 ] and arr = [ 1, 5, 6 ]