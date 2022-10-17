"use strict";
// fungsi union
function Res(data) {
    return data.join(' ');
}
let data = [1, 'data', '3', 'result'];
// fungsi alias
function Result(data) {
    return data.join(' ');
}
console.log(Result(data));
let words = ['bejo', 'has', '4', 'sport', 'car'];
console.log(Result(words));
console.log(`Result from union (data) :  ${Res(data)}`);
console.log(`Result from union (word) : ${Res(words)}`);
