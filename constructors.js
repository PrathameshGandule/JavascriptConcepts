/*
    constructor = special method for defining methods and
                  properties of a object
                  reusability
*/

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "mustang", 1976, "red");
const car2 = new Car("Chevrolet", "Camaro", 1985, "yellow");
car1.drive()
car2.drive()