function addNums(a,b){
    console.log(a+b)
}
addNums(2,3)
addNums("4",5) // treats as string and concatinates this is called bug

// reference error : c and d are not defined
console.log(c+d)
console.log("this line never runs")

// syntax error
var c = "hey
console.log(c)

// type error
(5).pop

// range error
(10).toString(2)