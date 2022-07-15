calculateFruitCost=(fruitName, quantity)=>{
    price=30.00
    a=price*quantity
    return `${quantity} ${fruitName} for KES ${a}`
}
   console.log(calculateFruitCost("Pineapple", 5))

class KioskCalc{
    constructor(fruit,quantity){
        this.fruit=fruit
        this.quantity=quantity
        this.fruitPriceList={"Orange": 30, "Mango": 15, "Avocado": 40}
        this.totalCost=function(){
            if (this.fruitPriceList[this.fruit]===undefined){
                return `${this.fruit} is not a available.`
            }
              return `${this.quantity} ${this.fruit} at KES ${this.fruitPriceList [this.fruit]* this.quantity}`
        }

    
    }

}

var kioskCalc =new KioskCalc("Mango",5)
console.log(kioskCalc.totalCost())
