
namespace StringUtils{
   export function add(a: string, b: string) {
        return a + "" + b
    }
}
const string = StringUtils.add("Hello","world!")
console.log(string)

namespace NumberUtils{
 export function add(a: number, b: number) {
        return a + b
    }
}
    
console.log(NumberUtils.add(1, 2))
    