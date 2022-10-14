var word;
word = "Learning Typescript is different than Javascript";
var getStr = function (word, start, end) {
    return word.slice(start, end);
};
console.log(getStr(word, 9, 19));
var jenis_kelamin;
(function (jenis_kelamin) {
    jenis_kelamin["lanang"] = "pria";
    jenis_kelamin["hoho"] = "wanita";
})(jenis_kelamin || (jenis_kelamin = {}));
console.log(jenis_kelamin.lanang);
var coba = ['aa', true, 1];
var tupz;
