// allias
// let dataType: "data" | "3" // string literal, tidak bisa menjadi type 
type dataType = (string | number)[]  // type allias


let data:dataType=[1, 'data', '3', 'result']


function Result(data:dataType):string{
 return data.join(' ')
}

console.log(Result(data))


let words:[string, string, string, string, string] = ['bejo', 'has', '4', 'sport', 'car'];

console.log(Result(words))

let hanz = "hoho"
console.log(hanz)

