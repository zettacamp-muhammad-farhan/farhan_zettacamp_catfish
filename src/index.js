var word;
word = "indonesia merdeka";
var getStr = function (word, start, end) {
    return word.slice(start, end);
};
console.log(getStr(word, 1, 9));
