"use strict";
let word = "Learning Typescript is different than Javascript";
let getStr = function (word, start, end) {
    return word.slice(start, end);
};
let start = 9;
let end = 19;
console.log(getStr(word, start, end));
