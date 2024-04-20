"use strict";
// primitive defined datatypes include number,boolean,symbol,string,null,undefined ,bigint they have pass by reference 
const Name="akash";
const isNumber=23;
const isLoggedIn=true;
const isTemperature=null;
let userEmail=undefined;

let st1=Symbol("123");
let st2=Symbol("123");
console.log(st1===st2);
console.table([st1,st2]);
let value=12333333344444n;
console.log(value);
console.log(typeof value);
// reference non primitive datatypes include 
// array object and function
// the have type object only return type of function is object function
const myfunc=function(){
    console.log("hello world");
}
let heroes=["virat kohli","Ab develliers","Power rangers"]
let myobj={
    name:"akash",
    qualification:1233,
}
console.log(heroes);
console.log(myobj);
myfunc();
console.log(myfunc);
console.log(typeof(myfunc),typeof myobj,typeof heroes)
// so function has an return type function while other have object