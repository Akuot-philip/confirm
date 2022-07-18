// var  pricelist={
//     orange:20,
//     mango:30,
//     apple:25,
//     berries:120
// }
// function calculateFruit(fruitname,quantinty){
// var price = pricelist[fruitname]

//   console.log(`${quantinty} ${fruitname} for KES ${price * quantinty}`);

// }
// calculateFruit('orange',2)


//correction for number one

class pricelist {
  constructor(priceunit) {
      this.priceunit = priceunit;
      this.calculateFruitCost = (fruitName, quantity) => {
          return `${quantity} ${fruitName} for KES ${parseFloat(this.priceunit*quantity).toFixed(1)}`
      }      
  }
}
let oranges = new pricelist(30.0)
let pineapples = new pricelist( 50.0)
console.log(oranges.calculateFruitCost('Mango', 2))
console.log(pineapples.calculateFruitCost('Apple', 5))



class KioskCalc{
  constructor(fruit,quantinty2){
    this.fruit=fruit;
    this.quantinty2=quantinty2;
    this.fruitPricelist={
      'orange':30,
      'mango':15,
      'avocad':40

    };
     
  this.total=()=>{
    return`${this.quantinty2} ${this.fruit} for KES ${quantinty2 * this.fruitPricelist.orange}`
  }

}
}

var kioskCalc=new KioskCalc("orange",5)
var kioskCalc2=new KioskCalc("mango",4)
var kioskCalc3=new KioskCalc("Avocado",3)

console.log(kioskCalc.total());
console.log(kioskCalc2.total());
console.log(kioskCalc3.total());