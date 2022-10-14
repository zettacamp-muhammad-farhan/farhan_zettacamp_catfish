let word:string;
word = "Learning Typescript is different than Javascript";

let getStr = function(word:string, start:number, end:number):string{
    return word.slice(start, end)
} 

console.log(getStr(word,9, 19))

enum jenis_kelamin {"lanang"="pria", "hoho"="wanita"}


console.log(jenis_kelamin.lanang)

let coba:(string|number|boolean)[] =['aa' , true, 1]

let tupz:[number, boolean, number];



