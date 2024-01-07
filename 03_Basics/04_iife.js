//Immediately invoked function expression (IIFE)

(function chai(){ //named iife
    console.log("DB CONNECTED");
})();

//we use iife becuase -- sometimes global variables get polluted and to avoid that pollution in this function..we use iife
// (function defnition)(function invoke/execution/call) - syntax
//semicolon has to be put

//ex2
((name) => { //unnamed iife
    console.log(name);
})("Hema");