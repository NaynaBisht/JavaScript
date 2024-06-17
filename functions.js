function myFunc(){
    console.log("Hello World");
}
myFunc()


function addTwoNums(){
    var a = 10
    var b = 20
    var c = a+b
    console.log(c)
}
addTwoNums()

function add(a,b){
    var c = a+b
    console.log(c)
}
add(2,3)
add(20,30)


function letterFinder(word, match){
    for(i = 0; i<word.length; i++){
        if(word[i] == match){
            console.log("Found the letter at", i)
        }
        else{
            console.log("Letter not found", i)
        }
    }
}
letterFinder("wotot","t")




