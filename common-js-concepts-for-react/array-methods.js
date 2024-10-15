const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phonew', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brand = products.map(items => items.brand + items.price)
const prices=products.map(items=>items.price)
// console.log(brand);
// console.log(prices);

const product = products.forEach(product => {
    // console.log(product.color);
});

// 3. filter
const cheap = products.filter((price) => price.price < 7000)
// console.log(cheap);
const specific = products.filter((product) => product.name.includes('w'))
console.log(specific);
// 4. find
const special = products.find((product) => product.price < 7000)
// console.log(special);


const specific1 = products.find((product) => product.name.includes('w'))
console.log(specific1);