// functional programming - distinction between data and functions - data can exist out 

var currencyOne = 100
var currencyTwo = 0
var exchangeRate = 1.2

function convertCurrency(amount, rate) {
    return amount*rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate)

console.log(currencyTwo)

// many functions by default return - undefined
console.log("hello")

function doubleIt(num){
    return num*2
}
console.log(doubleIt(5))
console.log(doubleIt(10).toString())

function objectMaker(val){
    return{
        prop:val
    }
}
console.log(objectMaker(20))
console.log(objectMaker(doubleIt(100)))





