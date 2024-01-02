//singleton - using constructor

// const friendsFan = new Object(); - singleton
const friendsFan = {} //literal method
//both o/p : {} - empty object

friendsFan.name = "Elsa";
friendsFan.favChar = "Pheobe Buffay";
friendsFan.timesWatched = 5;
console.log(friendsFan);

const regularFan = {
    email: "fan@gmail,com",
    fullName: {
        firstName: "Elsa",
        lastName: "Frozen"
    }
}

console.log(regularFan.fullName.firstName); //chaining

//Merging objs
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// const obj3 = {obj1, obj2};
// console.log(obj3);
// o/p: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//same prob as it was in arrays

// better approach 
// const obj3 = Object.assign({},obj1,obj2);
//dont necessarily have to take {}, but then combined values would be in obj1
//cuz according to syntax : Object.assign(source,target1,target2..)

//Best approach :spread operator
const obj3 = {...obj1, ...obj2};

console.log(obj3);

//when we get data from db, they are in the form of array of objects

const data = [
    {
        name:"hema",
        mail:"hema@gmail.com"
    },
    {
        name:"hema",
        mail:"hema@gmail.com"
    },
    {
        name:"hema",
        mail:"hema@gmail.com"
    }
];

// users[1].email --> email id of first obj

//other basics methods
console.log(Object.keys(friendsFan));
console.log(Object.values(friendsFan));
console.log(Object.entries(friendsFan));
console.log(Object.hasOwnProperty('isLogged'));

//Object de-structuring

const course = {
    courseName: "jsin hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//we have to write course.courseInstructor to access
//but there is a better way

const {courseInstructor} = course;
//now we can just use courseInstructor to access this

const {courseInstructor: instructor} = course;
//now we can simply access "hitesh" through calling instructor