// argument list: annotation every single argumen + annotation for what the function will return.
// TS will analyze the body of the function. TS doesn't check the logic.
const add = (a: number, b: number): number => {
    return a + b;
}

// void
const subtract = (a: number, b: number) => {
    a - b;
}

const logger = (message: string): void => {
    console.log(message)
}

// Destructuring with Annotations
const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(`weather: ${forecast.weather}`)
}

// destructuring
const logWeatherDes = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}

logWeather(forecast)

// Destructuring around objects
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age, name }: { age: number, name: string, } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;


