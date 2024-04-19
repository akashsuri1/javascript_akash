"use strict";
let score="akash"
let isNumber=Number(score)
console.log(typeof isNumber)
console.log(typeof(isNumber))
console.log(isNumber)
/*
"akash" NaN
undefined NaN
null 0
"33" 33
not an number is an special number but it has type number only
true 1
false 0
*/
let value=undefined
let isBoolean=Boolean(value)
console.log(typeof isBoolean)
console.log(isBoolean)
/* 
undefined false
1 true
0 false
"" false
"akash" true
NaN to false
null to false
*/
let string=Number("akash")
let isString=String(string)
console.log(typeof string)
console.log(isString)
/*
undefined undefined
true true
false false
null null
33 "33"
NaN NaN
*/