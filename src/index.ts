let word:string;
word = "Learning Typescript is different than Javascript";

let getStr = function(word:string, start:number, end:number):string{
    return word.slice(start, end)
} 

console.log(getStr(word,9, 19))




