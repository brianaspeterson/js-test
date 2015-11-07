function Bitly(name){
    
    this.name = name;
    this.eat = function(food) {
        this.food = food;
        return "Hi, my name is " + name + " and I like to eat " + food + "!";
    };
    
    this.swim = function() {
        return "Hi, my name is " + name + " and I like to swim !"
    };

}

var fish1 = new Bitly('eric');
var fish2 = new Bitly('ponch');

console.log(fish1.eat('kale'));
console.log(fish2.eat('twinkies'));
console.log(fish1.swim());
console.log(fish2.swim());
