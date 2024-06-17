// key value pairs in objects
var storeManager={
    name: "John",
    age: 30,
    address: "123 Main St",
    phone: "555-555-5555"
}
storeManager.nextAchievement = "build"

// OR Add Properties
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(storeManager)
console.log(storeManager.name)

// method 3
var car = {}
car["color"] = "green"
car["speed"] = 200
console.log(car)
console.log(car.color)

// push and pop methods
var fruits = []
fruits.push("apple")
fruits.push("banana")
fruits.push("orange")
console.log(fruits)

fruits.pop()
console.log(fruits)

// math objects :
console.log(Math.PI)
console.log(Math.E)
console.log(Math.round(2.4))
console.log(Math.ceil(2.4))
console.log(Math.pow(2,3))
// Math.sin(), Math.cos(), Math.tan() Math.sqrt(16) 


// random method - generates number between 0 - 0.99
var decimal = Math.random()
console.log(decimal)
console.log(decimal * 10)


