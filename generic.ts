
function map<T, U>(items: T[], transform: (item: T) => U): U[] {
    return items.map(transform)
}

const strArr = ["hello", "world"]
const getLength = (s: string) => s.length
const lengths = map(strArr, getLength)
console.log(strArr)
console.log(getLength)
console.log(lengths)
