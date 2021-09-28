// Interfaces : Creates a new type, describing the property names and value types of an object. 

interface Vehicle {
    name: string;
    // year: number;
    year: Date;
    broken:boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    // year: 2000,
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}) : void => {
const printVehicle = (vehicle: Vehicle) : void => {
    // console.log(`Name: ${vehicle.name}`)
    // console.log(`Name: ${vehicle.year}`)
    // console.log(`Name: ${vehicle.broken}`)
    console.log(vehicle.summary())
}

printVehicle(oldCivic)