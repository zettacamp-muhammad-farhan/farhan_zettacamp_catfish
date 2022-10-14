let word:string = "Learning Typescript is different than Javascript";

let getStr = function(word, start, end):string{
    return word.slice(start, end)
} 

let start:number = 9
let end:number = 19

console.log(getStr(word,start, end))