/*
    super
        keyword is used in classes to call the constructor or 
        access the properties and methods of a parent (superclass)
        this = this object
        super = the parent
*/

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at the speed of ${speed} mph`);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const fish = new Fish("fush", 2, 16);
const rabbit = new Rabbit("rabbu", 1, 25);
const hawk = new Hawk("hawkya", 5, 60);

hawk.fly();
rabbit.run();
fish.swim();