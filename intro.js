console.log("Hema...");
const id = 123;
let studentName = "Hema";
var course = "CSE";

console.log(id);

let marks;

//constants cannot be changed
//prefer not to use var
//let was introduced to overcome scope problems with var
//you can print all variables togeether as a table... by folloowing syntax
//if you declare and not initialize a variable.. its value would be undefined

console.table([id, studentName, course, marks]);