'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];

// const shortNames = names.filter( function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// let answers = ['IvAN', 'AnnA', 'DmItRIY', 'Hello'];

// answers = answers.map(item => item.toLowerCase());
// console.log(answers);

// every/some

// const some = [4, 6, 7];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 3, 1, 2, 6];
//                         // 0   4
//                         // 4   5
//                         // 9   3 ..
// const res = arr.reduce((sum, current) => sum + current ); 
//можно еще добавть начальное значение, как аргумент тут присудствует
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
                      
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    dima: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

let newArray = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
// newArray = newArray.filter(item => item === 'persone');
console.log(newArray);