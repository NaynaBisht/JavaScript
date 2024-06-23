// for of can work on iterable items like arrays
const colors = ['red', 'orange', 'yellow']
for(var color of colors){
    console.log(color);
}

//  built in methods
const car2 = {
    speed : 200,
    color : 'red',
}
console.log(Object.keys(car2));
console.log(Object.values(car2));
console.log(Object.entries(car2));

var clothingItem = {
    type : 'shirt',
    size : 'large',
    color : 'blue'
}
for(const key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key]);
}

function testBracketsDynamicAccess(){
    var dynamicKey;
    if(Math.random()>0.5){
        dynamicKey = 'speed';
    }else{
        dynamicKey = "color"
    }
    var drone = {
        speed: 15,
        color: "orange"
    }
    console.log(drone[dynamicKey])
}
testBracketsDynamicAccess();

// for-in and for-of
const car = {
    engine:true,
    speed: "slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("sports car object", sportsCar)

// in gives all properties
for(prop in sportsCar){
    console.log(prop, sportsCar[prop]);
}

// of gives only acquired properties
for(prop of Object.keys(sportsCar)){
    console.log(prop, sportsCar[prop]);
}




