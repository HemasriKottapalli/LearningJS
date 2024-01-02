// Two types of creating objects
// 1. literals          2.constructor

//object literals
const JsUser = { 
    name: "Hema",
    age: 10,
    location: "Hyd",
    email: "Hema@gmail.com",
    isLoggedIn: false
};

//acessing
console.log(JsUser.email);
console.log(JsUser["email"]); //this is better
JsUser.name = "elsa";
Object.freeze(JsUser);
JsUser.name = "anna";
console.log(JsUser);