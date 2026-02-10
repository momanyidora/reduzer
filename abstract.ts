abstract class Walkable {
    abstract walk(): void
    abstract speed(): number;
}
abstract class Swimmable {
    abstract swim(): void
    abstract dive(): void
    abstract swimSpeed(): number
}
abstract class Flyable {
    abstract fly(): void
    abstract flySpeed(): number
}
class Fish extends Swimmable {
    name: string;
    constructor(name: string) {
        super()
        this.name = name
    }
    swim(): void {
        console.log(`${this.name} is swimming`)
    }
    swimSpeed(): number {
        return 20
    }
    dive(): void {
        console.log(`${this.name} dives deeper`)
    }
}
const myfish = new Fish("lexxy")
myfish.swim()
console.log(myfish.swimSpeed())
class Dog extends Walkable {
    name: string
    distance: number
    constructor(name: string, distance: number) {
        super()
        this.name = name
        this.distance = distance
    }
    walk(): void {
        console.log(`${this.name} is walking around happily`)
    }
    speed(): number {
        return 15
    }
}
const rex = new Dog("rex", 200)
rex.walk()
console.log(rex.speed())
class Duck extends Flyable implements Swimmable, Walkable {
    name: string;
    distance: number
    constructor(name: string, distance: number) {
        super()
        this.name = name
        this.distance = distance
    }
    fly(): void {
        console.log(`${this.name} takes off quacking`)
    }
    flySpeed(): number {
        return 20
    }
    swim(): void {
        console.log(`${this.name} paddles`)
    }
    swimSpeed(): number {
        return 5
    }
    dive(): void {
        console.log(`${this.name} dives`)
    }
    walk(): void {
        console.log(`${this.name} waddles`)
    }
    speed(): number {
        return 6
    }
}
const duckie = new Duck("duckie", 103)
duckie.fly()
console.log(duckie.flySpeed())
function race(competitor: Walkable): void {
    console.log("Race is starting!")
    competitor.walk()
    console.log("speed:", competitor.speed())
}
race(rex)
function diveContest(diver: Swimmable): void {
    console.log("diver contest started")
    diver.swim()
    diver.dive()
}
diveContest(myfish)
