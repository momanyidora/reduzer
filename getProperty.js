function getProperty(obj,key){
    return obj[key]

}
const person = {
    name:"Reduzer",
    age: 5}

const location = getProperty(person,"location")
console.log(getProperty(person, "name")); 
console.log(getProperty(person, "age"));
console.log(getProperty(person,"location"))


