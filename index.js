//local module
const {a,add}= require('./local-1');
const {a:a2,add:add2}= require('./local-2');
console.log(add2(2,3,4));

// built in modules

const path=require("path");
console.log(path.parse("D:/practicee/index.js"))