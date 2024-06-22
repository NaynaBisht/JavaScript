class Car {
    constructor(color, speed){
        this.color = color
        this.speed = speed
    }
    turboOn(){
        console.log("turbo is on")
    }
}
const car1 = new Car("red", "20")
car1.turboOn()

class Animal{
    constructor(name, sound){
        this.name = name
        this.sound = sound
    }
    makeSound(){
        console.log(this.sound)
    }
}
var myDog = Object.create(Animal)
console.log(Animal);
// or
var myDog = new Animal("dog", "bark")
myDog.makeSound()

// Inheritance
class Dog extends Animal{
    constructor(name, sound, breed){
        super(name, sound)
        this.breed = breed
    }
    bark(){
        console.log(this.sound)
    }
}
var myDog = new Dog("dog", "bark", "lab")
myDog.bark()
console.log(myDog.name, myDog.breed);

// encapsulation - making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.
console.log("abc".toUpperCase());

// abstraction - hiding the implementation details of a class and only showing the necessary features of the class

// polymorphism - ability to use a single interface for different data types or objects

const bicycle = {
    bell:function(){
        return "ring ring! watch out"
    }
}
console.log(bicycle.bell());

const door = {
    bell:function(){
        return "ding dong!"
    }
}
console.log(door.bell());
// same method name but different implementation

function ringTheBell(thing){
    console.log(thing.bell())
}
ringTheBell(bicycle)
ringTheBell(door)

// example

class Bird{
    useWings(){
        console.log("flap flap")
    }
}
class Eagle extends Bird{
    useWings(){
        super.useWings()
        console.log("barely flapping")
    }
}
class Penguin extends Bird{
    useWings(){
        console.log("no flapping")
    }
}
console.log();
var baldEagle = new Eagle()
var kingPenguin = new Penguin()
baldEagle.useWings()
kingPenguin.useWings()