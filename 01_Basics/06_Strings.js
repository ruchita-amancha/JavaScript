const name ="Ruchita"
const repoCount = 50;

// console.log(name + repoCount + " Value");  // Not prefered

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Ruchi-RA fc")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "     Ruchita     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ruchita.com/ruchita%20amancha"

console.log(url.replace('%20','-'));

console.log(url.includes("ruchita"));

[]=console.log(gameName.split(" "));

