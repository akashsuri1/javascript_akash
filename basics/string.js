"use strict";
const name="akash suri";
let repocount=50;
console.log(name+" "+repocount+" value");
let newSyntax=`The ${name} has ${repocount} repo's in github`;
console.log(newSyntax);
//methods in github include
//the string is an object in javascript not an array it has key value pairs in it not indexes like an hashmap
const gameName=new String("akash_suri");
console.log(gameName);
console.log(gameName.__proto__);
//these are method or attributes of string
console.log(gameName.length);
console.log(gameName.toUpperCase());
//but the change does not take place in the same object as it is passed by value as decalred on stack
//character and index at
console.log(gameName.charAt(5));
//it tells the index of a in the string
console.log(gameName.indexOf('a'));
//another method is substring like in cpp used to make substrings
let anotherstring=gameName.substring(0,5);
console.log(anotherstring);
// akash
//same way we can use slice but the slice works with negative indexes also
let newstring=gameName.slice(-5,-1);
// "suri"
console.log(newstring);
let newstringone="  __suri__  ";
console.log(newstringone);
console.log(newstringone.trim());
let url="https://akashsuri/akash%20.com";
console.log(url.replaceAll('akash','billonaire'));
console.log(url.includes('aka'));
let project="akash-suri-okay";
console.log(project.split('-'));
console.log(project.split('-',2));
//so replace replaces first occurence while replaceAll cahnges all occurrence 