//Data types  are divided into primitive and non primitive based on how they are storedin memory 

//Primitive:
//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
let someString = "Hema";
let someNumber = 234;
let someBool = true;
let something = null;
let somethingElse = undefined; // or let somethingElse;
let id = Symbol("123");
let bigNumber = 1234543212345678987643n;


//Reference Types/Non-primitive :
//Arrays, Objects, Functions
const loves = ["Rach", "Pheobe", "Monica"];

let myObj = {
    name : "Hema",
    age : 20
};

const myFunction = function(){
    console.log("Hello World");
}


//*********************************************************************

/*
    Memory
    -Stack memory (primitive)
    -Heap memory (Non-Primitive)
*/

// Primitive -> copy milta h
// Non-primitive -> reference milta h 

let myName = "Hema";
let myCatName = myName;
myCatName = "Pheobe";
console.log(myName);
console.log(myCatName);
//only myCatName is updated but not myName cuz only a copy of myName was sent to myCatName

let myPencil = {
    color: "yellow",
    brand: "apsara"
};

let myFriendsPencil = myPencil;
myFriendsPencil.color = "red";

console.log(myPencil);
console.log(myFriendsPencil);
//both would be updated cuz objects are reference types and refernce of mypencil was passed to myFriendsPencil
