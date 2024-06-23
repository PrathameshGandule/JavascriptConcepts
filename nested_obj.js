/*
    nested objects
        objects inside of other objects
        allows you to represent more  complex datastructure
        child object is enclosed by parent object

        Person{address{}, constactInfo{}}
*/

// const person = {
//     name : "Spongebob Squarepants",
//     age : 30,
//     job : "cook",
//     hobbies : ["cooking", "jellyfishing", "water drifting"],
//     address : {
//         street : "124 Conch St.",
//         city : "Bikini Bottom",
//         country : "Int. Waters"
//     }
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.job);
// function hobbiesPrint(){
//     for(let i=0 ; i<3 ; i++)
//         console.log(person.hobbies[i])
// }
// hobbiesPrint();
// for(const property in person.address)
//     console.log(person.address[property]);


class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country=  country;
    }
}

const person = new Person("spongebob", 30, "124 conch st.", 
                                           "bikini bottom", 
                                           "int. waters");
                                           
const person2 = new Person("patrick", 35, "126 conch st.", 
                                            "bikini bottom", 
                                            "int. waters");

console.log(person2)