const fatherName = 'aurnob';
let season ='rainy';
season = 'winter';
console.log(season);
// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||

if (fatherName === 'aurnob' && season === 'rainy') {
  console.log("it's a rainy day")
}else if (fatherName==='aurnob' || fatherName=== 'Aurnob') {
  console.log('aurnob');
}else {
  console.log("not matched ")
}

// 3. array declare
// index,
// length, push,

const array = [45, 3, 2, 33];
const newArray = array[1];
array[3] = 7;
console.log(array);
console.log(array.length);


for (let i = 0; i < array.length; i++) {
  let number = array[i]
  // console.log(number);
}

// 4. function
function multiply(num1,num2) {
  const result = num1 * num2;
  return result
}

const output = multiply(5, 6);
console.log(output);

// 5. Object

const person ={
  name: 'lal miya',
  age: 78,
  profession: 'painting',
  45: [23, 32, 65],
  
  movies:['king khan', 'Dhakar Mastan']
}
// dot notation
const prof1 = person.profession;
const movie =person.movies[1]
console.log(prof1);
console.log(movie);


// bracket notation
const age = 'age';
const name = person['name'];
const movie1 = person['movies'];
const personAge = person[age];
// const num = person.45 //error
const num1 = person[45]
// console.log(name);
// console.log(movie1);
console.log(personAge);
// console.log(num);
console.log(num1);
