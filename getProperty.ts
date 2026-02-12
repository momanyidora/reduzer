function getProperty<T extends object, K extends keyof T>(obj:T, key:K){
    return obj[key]

}
const person = {
    name: "Reduzer",
    age: 5
    
}
// const location = getProperty(person, "location")
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
// console.log(getProperty(person, "location"))
