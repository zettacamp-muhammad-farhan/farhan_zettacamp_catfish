let data:(number | string)[]=[1, 'data', '3', 'result']


function Result(data:any):string{
 return data.join(' ')
}

console.log(Result(data))


let word:[string, string, string, string, string] = ['bejo', 'has', '4', 'sport', 'car'];

console.log(Result(word))

