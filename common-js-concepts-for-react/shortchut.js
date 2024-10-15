// check truthy

// let myVar = 2;
// if (myVar) {
//     myVar=myVar * 200;
//     console.log(myVar);
// } else {
//     console.log(myVar, false);
    
// }


// you check negative or falsy anything

// let money = 10;
// if (!money) {
//     console.log(false);
// } else {
//     console.log(true);
// }

// console.log(Boolean(money));


const money = 400;
const dollar = 100;
// let food;
// if (money > 80) {
//     food='biriyani';
// } else {
//     food='cha-biscuit';
// }
// console.log(food);


const food = money > 80 ? 'biriyani' : 'cha-biscuit';
// console.log(food);

const drinks = (money >= 80 && dollar >= 100) ? 'col-drinks' : 'filter-water';
// console.log(drinks);

// convert
const nums = 43;
const stringNums = nums+' ';
// console.log(typeof nums);
// console.log(typeof stringNums);

// string to number
const input = '350';
const newInput = +input;
// console.log(typeof newInput);

let isActive = true;
const show = () => console.log('display User');
const hide = () => console.log('hide User');
// isActive ? show() : hide()

isActive&&show()
!isActive&&hide()
// isActive||show()
// !isActive||show()

// toggle boolean
isActive===!isActive