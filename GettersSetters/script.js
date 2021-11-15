'use strict';

// const persone = {
//     name: 'Alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);

class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = 'Ved';


    
    say() {
        return console.log(`Его зовут ${this.name} ${this.#surname} и ему ${this.age}`);
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

let dima = new User('Dima', 28);
// dima.sername = 'Ved';
dima.surname = 'Tesla';
console.log(dima.say());
console.log(dima.surname);