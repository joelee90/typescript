// Annotations with variables
let apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let noth: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNums: number[] = [1, 2, 3]
let truths: boolean[] = [true, false]

// Classes
class Car {}
let car: Car = new Car()

//Object Literals
let point: { x: number;y: number} = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}
// (i: number) => void
// input => result

logNumber(5)

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
					// fixing 'Any' Type

// 2) When declare variable on one line and initialize it later.(Delayed Initialization)\
// declaration on one line, and initialization later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;
// should be: let foundWord: false;
for(let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly. (Bad code example - A possible case when a single variable has different types.)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
// numberAboveZero starts as boolean but can be assigned as a number type.
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}

