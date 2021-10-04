'use strict';

const person = {
    name: 'Alex',
    tel: '0939128444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'Kilo';
console.log(person);