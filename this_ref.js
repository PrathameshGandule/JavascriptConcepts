/*
    this = reference to the object where THIS is used
           (the object depend on the immediate context)
           'this' keyword doesn't work with arrow functions

*/

const person = {
    name : "SpongeBob",
    favFood : "hamburgers",
    sayHello : function(){console.log(`I am ${this.name}`)},
    eat : function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person.sayHello()
person.eat()