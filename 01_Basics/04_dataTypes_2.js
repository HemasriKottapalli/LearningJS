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

