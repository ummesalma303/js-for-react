const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

const [x, y] = numbers;
// console.log(x, y);


// function boxify(x,y) {
//     const numbers = { x, y }
//     const numbers2=[x,y]
//     return numbers2
// }

// const output = boxify(5, 9);
// const [first, second] = output;
// console.log(first, second);

// object destructuring

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
const [first, second] = student.movies;
// const {name,age,movies}=student
// console.log(first);
// console.log(name,age,movies);
// console.log(movies[1]);


const employee = {
    id: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

// const { machine, id='N/A' } = employee;
console.log(id);
// const { height, address, drink } = employee?.specification;
// const { color,price,brand } = employee?.specification?.watch;
const {machine, id, specification:{height, watch:{brand}={}} } = employee;
// console.log(machine,brand,height);




// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 42
// };

//   const {education: {school:{name='dunno'}={}}={}} = user;
//   console.log(name); 
// console.log(user);
  
