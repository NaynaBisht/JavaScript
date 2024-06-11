
// while
var counter = 1
while(counter>0 && counter<10){
    console.log("Counter is", counter)
    counter++
}
// for
for(var i=0; i<=3; i++){
    console.log("Counter is", i)
}

// tasks
for(var i=1; i<=5; i++){
    console.log(i)
}
console.log("Counting completed")

for(var i=5; i>=1; i--){
    console.log(i)
}
console.log("Counting completed")

var j = 1
while(j<=5){
    console.log(j)
    j++
}
console.log('Counting completed!')

var j = 2018
while(j<=2022){
    console.log(j)
    j++
}
console.log('Counting completed!')

// nested loops - outer loop constant and inner runs
for(var year = 2023; year< 2025; year++){
    console.log("Year", year)
    for(var month = 1; month<=12; month++){
        console.log("Month", month)
    }
    console.log()
}

// tasks 
for(var i=1; i<=10; i++){
    if(i==1){
        console.log("gold medal")
    }else if(i==2){
        console.log("silver medal")
    }else if(i==3){
        console.log("bronze medal")
    }else{
        console.log(i)
    }
}
console.log()

for(var i=1; i<=10; i++){
    switch(i){
        case 1:
            console.log("gold medal")
            break
        case 2:
            console.log("silver medal")
            break
        case 3:
            console.log("bronze medal")
            break
        default:
            console.log(i)
    }
}
