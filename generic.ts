
function map<T, U>(items: T[], transform: (item: T) => U): U[] {
    return items.map(transform)
}

const strArr = ["hello", "world"]
const getLength = (s: string) => s.length
const lengths = map(strArr, getLength)
console.log(strArr)
console.log(getLength)
console.log(lengths)




function identity<T>(arg: T): T {
    return arg
}
console.log(identity(1))
console.log(identity("hello"))
console.log(identity<number>(10))
console.log(identity)


interface Box<T> {
    value: T
}

interface StringBox {
    value: string
}
const stringBox: Box<string> = { value: "one" }
console.log(stringBox)

interface NumberBox {
    value: number
}
const numberBox: Box<number> = { value: 1 }
console.log(numberBox)
