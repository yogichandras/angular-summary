// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

// How to create a class
interface coba{
    angka1:number;
}

class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }
    
    //constructor(private speed:number){}

    accelerate(): void {
        this.speed++;
    }

    throttle():void {
        this.speed--;
    }

    getSpeed():void {
        console.log(this.speed);
    }

    static numberOfWheels(): number {
        return 4;
    }

}

// Instantiate (create) an object from a class

let car = new Car(5);
car.accelerate();
car.getSpeed();

let angka:number = Car.numberOfWheels();

console.log(Car.numberOfWheels());