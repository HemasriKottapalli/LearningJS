let friends = ["Pheobe", "Ross", "Joey"];
let nerds = ["Leonard", "Sheldon", "Howard"];

// friends.push(nerds);
// o/p: [ 'Pheobe', 'Ross', 'Joey', [ 'Leonard', 'Sheldon', 'Howard' ] ]
//whole nerds is an element in friends

// let favs = friends.concat(nerds);
//o/p: [ 'Pheobe', 'Ross', 'Joey', 'Leonard', 'Sheldon', 'Howard' ]

//spread operator
// let favs = [...friends, ...nerds];
// console.log(favs);

const anotherArray = [1,2,3,[5,6,[7,8,[9]]]];
//flatting this array
const usable_anotherArray = anotherArray.flat(Infinity);
console.log(usable_anotherArray);

//other functions 
console.log(Array.isArray("Hema")); //checks if an array
console.log(Array.from("Hema")); //creates an array
console.log(Array.from({name : "Hema"})); //interesting
console.log(Array.of(score1, score2, score3));