let name = "Elsa";
let place = "Frozen";
//string interpolation
console.log(`Hiii my name is ${name} and i'm from ${place}`);

let yourName = new String("Anna-buffe");
console.log(yourName.length);
console.log(yourName.toUpperCase());
console.log(yourName.charAt(0));
console.log(yourName.indexOf('a'));

let newName = yourName.substring(0,2);
console.log(newName);

let aString = "      me";

console.log(aString)
console.log(aString.trim());

const url = "https://hema%20ksdd.com";
console.log(url.replace('%20','-'));
console.log(url.includes('a'));

let names = "hema elsa rach mon"
console.log(names.split(" "));