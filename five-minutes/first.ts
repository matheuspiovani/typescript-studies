let a = 5;
let b = 5;
let c = a + b;

console.log(c);

// Any
let myVariable: any = 'This is a string'

// Built in
let num: number = 5;
let name: string = 'Alex';
let isPresent: boolean = true;

// User defined
// enum, class, interface, array, and tuple

class Car {
// fields  
  model: String;  
  doors: Number;  
  isElectric: Boolean;

  constructor(model: String, doors: Number, isElectric: Boolean) {  
    this.model = model;  
    this.doors = doors;  
    this.isElectric = isElectric;  
  }

  displayMake(): void {  
    console.log(`This car is ${this.model}`);  
  }

}

const Prius = new Car('Prius', 4, true);
Prius.displayMake();


/*
interface ICar {  
  model: String,  
  make: String,  
  display(): void  
}

const Car: ICar = {  
  model: 'Prius',  
  make: 'Toyota',  
  display() => { console.log('hi'); }  
}
*/
