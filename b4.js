function Animal(Name, Weight){
    this.name =Name;
    this.weight =Weight;
    this.setName= function (name){
        this.name =name;
    }
    this.setWeight= function (weight){
        this.weight= weight;
    }
    this.getName= function (){
        return this.name;
    }
    this.getWeight =function (){
        return this.weight
    }
    this.toString=function (){
        return "Name: " + this.name + " Weight: " + this.weight
    }
}
let objAnimal1 = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.setWeight('45.6');
document.write(objAnimal1.toString())


let objAnimal2 = new Animal('Cat','3.5');
objAnimal2.setName('Mouse')
document.write(objAnimal2.getName())