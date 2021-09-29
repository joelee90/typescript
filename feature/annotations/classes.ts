// Blueprint to create an object with some fields(values) and methods(functions) to represent a 'thing'

class Vehicle {
    drive(): void {
        console.log('drive!')
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('Car drive!')
    }
}

// const vehicle = new Vehicle();
// vehicle.drive()

const car = new Car();
car.drive()