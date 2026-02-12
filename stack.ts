class Stack<T>{
  private items:T[] = []
    
   push(item:T):void{
    this.items.push(item)
   }

   pop():T|undefined{
    return this.items.pop()
   }

   peek():T|undefined{
    return this.items[this.items.length - 1]
   }
   isEmpty(): boolean{
     
       if (this.items.length === 0) {
           return true
       } else {
           return false
       }
   }
   
}     
const stringstack = new Stack<string>();
     stringstack.push("hello")
    stringstack.push("world")
    // stringstack.items.push("universe")
console.log(stringstack)

const topItems = stringstack.pop()
console.log(topItems)
console.log(stringstack)

const topItems2 = stringstack.peek()
console.log(topItems2)
console.log(stringstack)

const topItems3 = stringstack.isEmpty()
console.log(topItems3)
console.log(stringstack)

console.log(stringstack.pop())
console.log(stringstack.isEmpty())
console.log(stringstack)




const numberStack = new Stack<number>()
numberStack.push(10)
numberStack.push(20)
console.log(numberStack)

const upperItems = numberStack.pop()
console.log(upperItems)
console.log(numberStack)
const upperItems2 = numberStack.peek()
console.log(upperItems2)
console.log(numberStack)
const upperItems3 = numberStack.isEmpty()
console.log(upperItems3)
console.log(numberStack)

console.log(numberStack.pop())
console.log(numberStack.isEmpty())
console.log(numberStack)