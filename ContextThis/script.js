'use strict';
            // 1)
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

            // 2)
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();
            // 3)
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }

// let dima = new User('Dima', 28);

            // 4)      
// function sayName(sername) {
//     console.log(this);
//     console.log(this.name + sername);
// }

// const user = {
//     name: 'Dima'
// };

// sayName.call(user, 'Ved');
// sayName.apply(user, ['Ved']);

// //с помощью bind создает новую функцию

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция: this = window, но если 'use strict', то this = undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this


const btn = document.querySelector('button');
btn.style.width = '50px';
btn.style.height = '30px';
//если колбек функция ввиде function() {},то this сылкается на там элемент
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'yellow';
});

// у функции в виде () => нет своего контекста вызова, она всегда ссылается на родителя

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();// ссылается на объект obj

const double = a => a*2;
console.log(double(4));