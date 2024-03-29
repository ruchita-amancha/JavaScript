// #Primitive

//7 types: String,Number, Boolean, null,undefined, Symbol, BigInt

const score=100
const scoreValue = 1000.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 738489234792849021893493934893n  //represents BigInt


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "dogga"]


let myObj = {
    name:"Ruchita",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++
//Memoery

// Stack (Primitive) ,Heap (Non-Primitive)

let myYoutubeName = "hitechChaudarydotcom"

let anotherName = myYoutubeName
anotherName="chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

console.log(userTwo);

userTwo.email="user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



