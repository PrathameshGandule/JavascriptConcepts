/*
    getter
        special method that makes a property readable
    setter
        special property that makes a property writeable

    validate and modify a value when reading writing a property
*/

// class Rectabgle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0)
//             this._width = newWidth;
//         else
//             console.error("Width must be a positive number");
//     }

//     set height(newHeight){
//         if(newHeight > 0)
//             this._height = newHeight;
//         else
//             console.error("Height must be a positive number");
//     }

//     get width(){
//         return `${this._width.toFixed(2)} cm`;
//     }
//     get height(){
//         return `${this._height.toFixed(2)} cm`;
//     }

//     get area(){
//         return `${(this._width * this._height).toFixed(2)} cm`;
//     }
// }

// const rec = new Rectabgle(4, 5);

// console.log(rec.width);
// console.log(rec.height);
// console.log(rec.area)


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName == "string" && newFirstName.length > 0){
            this._newFirstName = newFirstName;
        }
        else{
            console.error(`First Name must be a non-empty string`);
        }
    }

    set lastName(newLastName){
        if(typeof newLastName == "string" && newLastName.length > 0){
            this._newLastName = newLastName;
        }
        else{
            console.error(`Last Name must be a non-empty string`);
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._newAge = newAge;
        }
        else{
            console.error(`Age must be a positive number`);
        }
    }

    get firstName(){
        return this._newFirstName;
    }
    get lastName(){
        return this._newLastName;
    }
    get age(){
        return this._newAge;
    }
    get fullName(){
        return `${this._newFirstName} ${this._newLastName}`;
    }
}

const josh = new Person("josh", "hutcherson", 30);

console.log(josh.firstName);
console.log(josh.lastName);
console.log(josh.age);
console.log(josh.fullName);