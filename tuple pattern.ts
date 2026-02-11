
class Car{
    brand: string;
    engine: string;
    seats: number;


    constructor(
         brand: string,
         engine: string, 
         seats: number
        ){
            this.brand = brand
            this.engine = engine
            this.seats = seats
        }

        toString() {
        return `${this.brand} with ${this.engine} engine, ${this.seats} seats`;
    }
}
class CarBuilder{
    private brand: string = "";
    private engine: string = "";
    private seats: number = 0;

    setBrand(brand: string): this{
        this.brand = brand
        return this
    }

    setEngine(engine: string): this{
        this.engine = engine
        return this
    }

    setSeats(seats: number): this{
        this.seats = seats
        return this
    }

    build(): Car{
        return new Car(this.brand, this.engine, this.seats)
    }
}

const mycar = new CarBuilder()
    .setBrand("Toyota")
    .setEngine("V6")
    .setSeats (5)
    .build();
    console.log(mycar)
    console.log(mycar.toString())

