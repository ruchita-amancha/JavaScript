
// let temperature = 41
// if (temperature === 41) {

//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50");
// }


// <, >, <=, >=, ==, !=, ===

// const score=200

// if(score>100){
//     let power ="fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 700

if (balance > 500) console.log("test");

if (balance < 500) {
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");
}
else {
    console.log("less than 1200");
}

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard &&2==3) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle||loggedInFromEmail){
    console.log("User logged in");
}