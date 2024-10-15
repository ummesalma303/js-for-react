const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
// 1. template string
const sentence = `My name is ${student.name} and age of ${student.age} has numbers ${numbers[2]} also liked movie ${student.movies[1]}`;
// console.log(sentence);

// 2. arrow function
const getFiftyFive = () => 55
console.log(getFiftyFive());


const getSixtyFive = () => 55+10
console.log(getSixtyFive());


const isEven = x => x % 2 === 0;
console.log(isEven(3));

const sum = (x, y, z) => x + y + z;
console.log(sum(2, 12, 3));

const doMath = (x,y,z,l) => {
    const result = x + y + z+l
    return result
}
const output = doMath(4, 8, 5,7);
console.log(output);


// spread operator
const numbers2 = [89, 35, 98, 12];
// create a new array from an older array and add an element
const newNumbers = [...numbers2,9,8]; // numbers array copy
numbers2.push(90);

console.log(numbers2,newNumbers);
