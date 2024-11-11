"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Chandler');
// user1.name = 'Joey'; // Cannot assign to 'name' because it is a read-only property
user1.greet('Hi there I am ...');
console.log(user1);
