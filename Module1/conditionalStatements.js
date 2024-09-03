// if else
var result = 50
if(result>40){
    console.log('Pass')
} else {
    console.log('Fail')
}

// if elseif else
var place = "first"
if(place=="first"){
    console.log('Gold')
} else if(place=="second"){
    console.log('Silver')
} else if(place=='third'){
    console.log('Bronze')
} else {
    console.log('No medal')
}

// switch 
var place = "fourth"
switch(place){
    case "first":
        console.log('Gold')
        break
    case "second":
        console.log('Silver')
        break
    case "third":
        console.log('Bronze')
        break
    default:
        console.log('No medal')
}

// tasks
var  age = 10
if(age>=65){
    console.log("You get your income from your pension")
} else if(age<65 && age>=18){
    console.log("Each month you get a salary")
} else if(age<18){
    console.log("You get an allowance")
} else{
    console.log("The value of the age variable is not numerical")
}
