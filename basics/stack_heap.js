"use strict";
// all primtive datatypes declared on stack and do pass by value
// while all the non primitive datatypes are declared on heaps and do pass by reference 
let youtubename="sourav joshi vlogs";
let anothername=youtubename;
anothername="chai aur code"
console.log(youtubename,anothername);
let user1={
    name:"mukesh",
    email:"mukesh@gmail.com",
};
let user2=user1;
user2.email="akash@google.com";
console.log(user2.email,user1.email);