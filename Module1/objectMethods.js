var car = {}
car["color"] = "green"
car["speed"] = 200
console.log(car)

// add a method to car object
// If the function is a property of an object, it is then referred to as a method. 
car.turnKey = function(){
    console.log("engine running")
}

car.lightsOn = function(){
    console.log("lights on")
}
console.log(car)
car.turnKey()
car.lightsOn()