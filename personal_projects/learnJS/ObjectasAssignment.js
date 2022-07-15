var  pricelist={
    orange:20,
    mango:30,
    apple:25,
    berries:120
}
function calculateFruit(fruitname,quantinty){
var price = pricelist['fruitname']*quantinty
  console.log(`${quantinty} ${fruitname}for KES ${price}`);

}
calculateFruit('orange',2)

class KioskCalc{
  constructor(fruit,quantinty){
    this.fruit=fruit;
    this.quantinty=quantinty;
    this.fruitPricelist={
      'orang':30,
      'mango':15,
      'avocado':40

    };
     
  this.total=()=>{
    return`${this.quantinty} ${this.fruit} for KES ${parseFloat(this.fruitPricelist.orange*this.quantinty)}`
  }

}
}

var KioskCalc=new KioskCalc("orange",5)
console.log(KioskCalc.total());