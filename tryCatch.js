// error handleing
// error is inside try and solu is in catch
// throw is used to thrwo error from try block to catch
// finally is used to run code after try and catch

// we get an error
// console.log(a+b)
// console.log("never runs")

// we can also throw error deliberately
// throw new ReferenceError()


// by using try catch the error will be displayed but the program will keep running
try{
    console.log(a+b)
} catch(err){
    console.log(err)
    console.log("there was an error")
}
console.log("program does not stop")

// throwing error on our own
try{
    throw new ReferenceError()
}catch(err){
    console.log(err)
    console.log("there was an error")
}
console.log("program does not stop")

console.log()
console.log()
console.log()

function addTwoNums(a,b){
    try{
        if(typeof(a)!= Number){
            throw new ReferenceError("a is not a number")
        }else if(typeof(b)!=Number){
            throw new ReferenceError("b is not a number")
        }else{
            console.log(a+b)
        }
    }catch(err){
        console.log("ERROR !",err)
    }
}
addTwoNums("2",3)
console.log("it still works")




