const person = {
    name: 'Lal Nil Holud mia',
    profession: 'Traffic Surgeon', 
    age: 39,
    25: 'Summer',
    'son-name': 'Sunny',
    address: 'Shahabag'
}

// dot notation
const pof1 = person.name
console.log(pof1);

// bracket notation

const prof2 = person['age'];
console.log(prof2);

const x = 'address';

// const prof3 = person[x];//undefined
const prof3 = person[x];
console.log(prof3);

const season = person[25];
console.log(season);

const son = person['son-name'];
console.log(son);