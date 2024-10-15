// 1. JSON => stringify, parse
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJson = JSON.stringify(student)
console.log(studentJson);
const studentParse = JSON.parse(studentJson);
console.log(studentParse);

//2. fetch

// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

// for
const numbers = [7, 9, 34, 5];
numbers.forEach(num => {
    console.log(num);
});

const map = numbers.map(num => num%2==0&&num*2);
console.log(map);


// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcame', price: 800, brand: 'laili', color: 'green' };

const product = [...products,newProduct];
console.log(product);

const phone = products.filter(product => product.name !=='phone');
console.log(phone);