// Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'

class Vehicle {

    constructor(public color: string) {}

    public honk(): void {
        console.log('honk')
    }

    protected honk2(): void {
        console.log('honk')
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('Car drive!')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk2()
    }
}

// const vehicle = new Vehicle();
// vehicle.drive()

const car = new Car(4, 'red');
car.startDrivingProcess();

// Class Method Modifiers
// public : method can be called any where, any time.
// private : can only be called by other methods in this class. (not for application security, but to restrict other dev can call)
// protected : can be called by other methods in this class, or by other methods in child classes.

// Fields in Classes
class Vehicle2 {
    // color: string = 'red';
    // constructor(color: string) {
    //     this.color = color;
    // }
 
    constructor(public color: string) {}

    protected honk3(): void {
        console.log('honk')
    }
}

const vehicle2 = new Vehicle2('orange');
console.log(vehicle2.color)

// Fields with Inheritance
// child constructor : super();

