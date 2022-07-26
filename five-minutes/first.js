var a = 5;
var b = 5;
var c = a + b;
console.log(c);
// Any
var myVariable = 'This is a string';
// Built in
var num = 5;
var name = 'Alex';
var isPresent = true;
// User defined
// enum, class, interface, array, and tuple
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is ".concat(this.model));
    };
    return Car;
}());
var Prius = new Car('Prius', 4, true);
Prius.displayMake();
var Car = {
    model: 'Prius',
    make: 'Toyota',
    display: function () { }
};
{
    console.log('hi');
}
