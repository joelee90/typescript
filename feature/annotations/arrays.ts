// Arrays : Each element is some consisten type of value
const carMakers = ['ford', 'toyota', 'chevy'];
const carByMake: string[][] = [];
const carByMakee = [
    ['explorer'],
    ['corolla'],
    ['bumblebee'],
];
// Declare empty array -> assign type else not needed.

// Why Typed Arrays?
// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100)

// Help with 'map'
const b = carMakers.map((car: string): string => {
    return car.toUpperCase();
})
console.log(b)

// Flexible types
const importantDates: (Date | String)[] = [new Date()];
importantDates.push(new Date());
importantDates.push('3');
importantDates.push(1002);

// Tuples in TypeScript(Typed Arrays)
// Any time we need to represent a collection of records with some arbitrary sort order
// Array-like structure where each element represents some property of a record

// Tuples in Action
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];
const pepsi : Drink = ['brown', true, 40]
const tea : Drink = ['green', false, 10]

// Why Tuples

