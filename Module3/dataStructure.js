// objects, arrays, maps, sets

// objects
const car = {
    engine:true,
    speed: "slow",
    engineOn : function(){
        console.log("engine on");
    }
}
console.log(car.speed);
car.engineOn();

// array
const grades = [2,3,4,5]
let gradeSum = 0
for(i=0; i<grades.length; i++){
    gradeSum += grades[i];
}
console.log(gradeSum);

// map - iterable key value pairs but different from objects

// set - every item should be unique
const house1 = "red"
const house2 = "blue"
const house3 = "blue"
// ignores repeated values
const houses = new Set()
houses.add(house1).add(house2).add(house3)
console.log(houses)


// forEach
const fruits = ['kiwi','mango','apple','pear']
function appendIndex(fruits, index){
    console.log(index + " " + fruits)
}
fruits.forEach(appendIndex)

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( 
    function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


// filter - filters your arrays based on a specific test
const nums = [0,10,20,30,40,50]
const filteredNums = nums.filter(
    function(num){
        return num > 20
    }
)
console.log(filteredNums)


// map
const filtered = [0,10,20,30,40,50].map( 
    function(num) {
        return num / 10
    }
)
console.log(filtered)

const result = []
const drone = {
    name: 'flyer',
    speed: 10
}
const droneKeys = Object.keys(drone)
console.log(droneKeys)
droneKeys.forEach(
    function(key){
        result.push(key, drone[key])
    }
)
console.log(result);

// working with maps
let best = new Map()
best.set(1, "champion")
best.set(2, "runnerup")
console.log(best);
console.log(best.get(1))

// working with sets
const fruit = ['apple','pear','apple','pear','plum', 'apple']
const fruitset = new Set(fruit)
console.log(fruitset)








