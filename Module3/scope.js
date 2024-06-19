// scope:
var globalVar = "i am global scope"
function example3(){
    var localVar = "i am local scope"
    console.log(globalVar)
    console.log(localVar)
}
example3()

// block scope - var is available only inside that block of code 
// let const
let color = "red"

if(color=="red"){
    let color = "blue"
    console.log(color)
}
console.log(color)

// var - is globally, once intialised can be used anywhere
var user = "miranda"
let users = "miranda"
const user3 = "miranda"

// var(linient), let, const(strict)

// use let if the value might change in the future
// use const if it will never change

//  VAR 
console.log(name) // gives undefined
var name = "mark" // initialised
console.log(name)

// let - cannot be used unless initialised
// console.log(animal)
let animal = "parrot"
console.log(animal)
animal = "duck" //value changed
console.log(animal)

// const - initialise during declaration only
// console.log(fish) - throws error
const fish = "shark"
console.log(fish)
// fish = "whale" cannot be reassigned