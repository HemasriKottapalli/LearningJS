function hello(){
    console.log("Hello World!")
}

hello();
//hello - refernce of function
//hello() - execution of function
 
// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

// let result = addTwoNumbers(3,4);
// console.log(result);

// function loginUserMessage(username){
//     if(username == undefined){
//         console.log("Username Undefined");
//         return;
//     }
//     return `${username} logged in!`
// }

// let result = loginUserMessage();
// console.log(result);

// above problem can be solved by "using a default value for username"
function loginUserMessage(username = "a user"){
        // if(username == undefined){
        //     console.log("Username Undefined");
        //     return;
        // }
        return `${username} logged in!`
    }
let result = loginUserMessage("Hema");
console.log(result);

//Aur kuch about functions : Rest operators(...)
// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400));

const user = {
    username: "hema",
    price: 199
};

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "elsa",
    price: 1349
});

//pass arrays to function

const myArray = [200, 400, 500, 600, 700];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArray));