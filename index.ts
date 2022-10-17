// fungsi union
function Res(data:(string | number)[]):string{
    return data.join(' ')
}

// allias
// let dataType: "data" | "3" // string literal, tidak bisa menjadi type 
type dataType = (string | number)[]  // type allias

let data:dataType=[1, 'data', '3', 'result']

// fungsi alias
function Result(data:dataType):string{
 return data.join(' ')
}



console.log(Result(data))


let words:[string, string, string, string, string] = ['bejo', 'has', '4', 'sport', 'car'];

console.log(Result(words))


console.log(`Result from union (data) :  ${Res(data)}`)
console.log(`Result from union (word) : ${Res(words)}`)
