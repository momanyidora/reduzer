

function getFirstEl<T>(arr:T[]):T{
    return arr[0]
}
const result1 = getFirstEl([1,2,3])
console.log(result1)
const result2 = getFirstEl(["a", "b", "c"])
console.log(result2)
