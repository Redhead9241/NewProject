'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(){
    console.log(`Пользователь ${this.name} ушел`);
};

class User1 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }

}


// const dima = new User('Dima', 28);
// const alex = new User('Alex', 20);

// dima.exit();