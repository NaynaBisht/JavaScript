// fp
var shoes = 100
var stateTax = 1.2

function totalPrice(shoes, stateTax){
    return shoes*stateTax
}

var toPay = totalPrice(shoes,stateTax)
console.log(toPay)

// oops
var purchase1 = {
    shoes:100,
    stateTax:1.2,
    totalPrice:function(){
        var calc = purchase1.shoes*purchase1.stateTax
        console.log('total price : ', calc);
    }
}
purchase1.totalPrice()

var purchase2 = {
    shoes: 50,
    stateTax: 1.3,
    totalPrice:function(){
        var calc = purchase2.shoes*purchase2.stateTax
        console.log('total price : ', calc);
    }
}
purchase2.totalPrice()

// using this keyword
var purchase3 = {
    shoes: 50,
    stateTax: 1.3,
    totalPrice:function(){
        var calc = this.shoes*this.stateTax
        console.log('total price : ', calc);
    }
}
purchase3.totalPrice()

