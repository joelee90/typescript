// In general, any file that houses class in single file in TS, import the class from elsewhere and use it there.

import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = 'red';
  }

  markerContent(): string {
    return `
    User Name : ${this.name}
    Color : ${this.color}    
    `;
  }
}

// # 205
// Constructor : special function defined inside of a class.
// Anytime constructor is defined, it will be instantly executed.
// right when we create instance of a class.
// When new class is created, constructor fucntion is going to run./
// this.property = some value -> initial assginment.

// # 206
// whenever call the constructor of a child class, required to call the constructor
// of a parent class as well.
// => super() : reference to the constructor method of a parent.
