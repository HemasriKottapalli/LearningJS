const user = {
    username : "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomemessage();
// user.username = "piyush";
// user.welcomemessage();
// console.log(this);
//when we are in node environment, we get {} on running above line

// function func(){
//     console.log(this);
// }
// func();

const func = () => {
    console.log(this); // prints {}
}
func();
//ab ye arrow function h

//observe variations of arrow functions

// const sum = (num1, num2) => {
//     return num1+num2;
// }

// const sum = (num1, num2) => (num1+num2);

//when returning a object wrap it in ()
//when {} are used, return is a must
//when only () is used, return is not needed