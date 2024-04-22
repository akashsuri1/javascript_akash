"use strict";
//The length method used to find the length of an string
const browserType="mozilla";
let length=browserType.length;
console.log(`The browser ${browserType} has an length of ${length}`);
console.log(`The last character of ${browserType} is ${browserType[length-1]}`)
//testing if an substring is conatined inside an string or not 
if(browserType.includes('zilla')){
    console.log("found substring");
}else{
    console.log("no substring");
}
//it contains the following substring
//starts with 
if(browserType.startsWith('moz')){
    console.log("yes it starts with it");
}else{
    console.log("so sorry it doesn't starts with it");
}
//ends with
if(browserType.endsWith('illa')){
    console.log("yes it ends with given substring");
}else{
    console.log("No it doesnt end with given substring");
}
//finding the positon of an substring inside an substring
const tagline="Mdn resources by developers and for developers";
let firstOccur=tagline.indexOf('developers');
let secondOccur=tagline.indexOf('developers',firstOccur+1);
console.log(firstOccur);
console.log(secondOccur);
//if it's not present in the string it return's -1
console.log(`The index of x in the given tagline is ${tagline.indexOf('x')}`);
//extracting an part of string's in javascript is
const newString=browserType.slice(1,4);
// it displays as the answer ozi
console.log(newString);
console.log(browserType.slice(1));
//type case conversion
const radData="The NaMe is MuD";
//this is used to normalize data and produce result
console.log(radData.toUpperCase());
console.log(radData.toLowerCase());
// replace is used to change an substring inside an string 
const updated=browserType.replace('moz','van');
console.log(updated);
let quote="To be or not be";
//replace replaces only first occurrence replace all is used to replace all occurrence
quote=quote.replaceAll('be','code');
console.log(quote); 