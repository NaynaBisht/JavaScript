//  types of empty values - null, undefined, empty

// null - absence of any object value
var letters = "abc"
console.log(letters.match(/a/))
console.log(letters.match("d"))


// undefined - variable has been declared but not assigned a value
console.log("jane smith")
var noise //undefined assigned
console.log(noise) 
noise = "thunder"
console.log(noise)

var game ={
    name: "chess",
    players: 2
}
console.log(game.type) //undefined


// empty - empty string
var name1 = ""
var name1 = ''
console.log(name1)