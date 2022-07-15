var  pricelist={
    orange:20,
    mango:30,
    apple:25,
    berries:120
}
function calculateFruit(fruitname,quantinty){
var price = pricelist[fruitname]

  console.log(`${quantinty} ${fruitname} for KES ${price * quantinty}`);

}
calculateFruit('orange',2)

class KioskCalc{
  constructor(fruit,quantinty2){
    this.fruit=fruit;
    this.quantinty2=quantinty2;
    this.fruitPricelist={
      'orang':30,
      'mango':15,
      'avocado':40

    };
     
  this.total=function(){
    return`${this.quantinty2} ${this.fruit} for KES ${quantinty2 * this.fruitPricelist.orang}`
  }

}
}

var kioskCalc=new KioskCalc("orange",5)
console.log(kioskCalc.total());