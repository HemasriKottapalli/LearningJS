let a = 10;
const b = 20;
var c = 30;
 
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();

}

one();

//******************** Interesting */
addOne(5); // no error
function addOne(value){
    return value+1;
}


addTwo(5); // error
const addTwo = function(num){
    return num+2;
}
