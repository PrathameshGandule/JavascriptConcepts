/*
    OBJECTS
        A collection of related properties and/or methods
        Can represent real world objects like person, car, bike etc.
        object = {key:value,
                  function()}
*/

const person1 = {
    firstName : "SpongeBob",
    lastName : "SqaurePants",
    age : 30,
    isEmployed : true,
    sayHello : function(){console.log(`Hi, I am SpongeBob`)},
    eat : () => console.log(`I am eating Krusty Vadapav`),
}

const person2 = {
    firstName : "Patrick",
    lastName : "Star",
    age : 35,
    isEmployed : false,
    sayHello : function(){console.log(`Hi, I'm Patrick...`)},
    eat : () => console.log(`I am eating Samosa-Chaat`),
}

person1.eat();
person2.eat();