var word = "Learning Typescript is different than Javascript";
var getStr = function (word, start, end) {
    return word.slice(start, end);
};
var start = 9;
var end = 19;
console.log(getStr(word, start, end));
