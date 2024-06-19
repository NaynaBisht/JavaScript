// infinite loop
function example(){
    console.log("line1");
    console.log("line2");
    console.log("line3");
    example();
}
// example()

let counter = 3
function example2(){
    console.log(counter)
    counter--
    if(counter === 0) return
    example2()
}
example2()




