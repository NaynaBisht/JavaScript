/*
types of datatypes in javascript :
string
number
boolean
null
undefined
bigint
symbol - used as unique identifier
*/

/*
operators : logical, arithmetic, comparison
*/
console.log(2+2)
console.log(2-2)
console.log(2*2+3+4-5)
console.log(3/2)
console.log(3%2)
console.log(3**2)
console.log(3>2)
console.log(5<6)
console.log(5==5)
console.log(4+2+4+(3-5))

// strings - "" or ''
console.log('')
console.log("hello world")
console.log('hello world')
console.log("123")

console.log()


// boolean
console.log(true)
console.log(false)
console.log(100=="100")
console.log(100==="100")
console.log(1!="1")
console.log(1!=="100")

console.log()


var currentTime = 10
console.log(currentTime>9 && currentTime<17)

// concatination
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString);

var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri);
// OR
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime);

console.log()
// task
var score = 8
console.log("Mid-level skills:", (score>0 && score<10))

var timeRemaining = 0
var energy = 10
console.log("Game over:", (timeRemaining<=0 || energy<=0))

var num1 = 2
var num2 = 5
var test1 = num1%2
var test2 = num2%2
var result1 = (test1==0)
var result2 = (test2==0)
console.log("is", num1,"an even number?", result1)
console.log("is", num2,"an even number?", result2)

console.log(5+10)

var now = "Now in "
var three = 3
var d = "D!"
console.log(now + three + d)

var counter = 0
counter += 5
counter += 3
console.log(counter)