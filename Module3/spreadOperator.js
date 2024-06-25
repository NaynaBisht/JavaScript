let top = [
    "rome",
    "paris",
    "france"
]
function show(place1, place2, place3){
    console.log(place1, place2, place3)
}

show(top[0],top[1],top[2])
// spread operator (...) is used to unpack an array
show(...top)

// Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const allFruits = [fruits, berries]
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(allFruits);
console.log(fruitsAndBerries);

// It's also easy to join objects:  
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar)

// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies)

// Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars)

// Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)




console.log()
// rest operator - to build a smaller box and pack items into it
const top7 = [
    "rome",
    "paris",
    "france",
    "switzerland",
    "germany",
    "italy",
    "spain"
]
// destructuring
const [] = top7
const [first, second, third, ...secondVisit] = top7
// secondVisit variable stores the rest of the items
console.log(secondVisit)

function addTax (taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate*item)
}
let shopping = addTax(1.1,46,89,35,79)
console.log(shopping)


const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
    console.log(starter);

    let obj = {
        key: 1,
        value: 4
    };

    let output = { ...obj };
    output.value -= obj.key;

    console.log(output.value);









