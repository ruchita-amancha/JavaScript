function sayMyName() {
    console.log("R");
    console.log("U");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("A");
}

// sayMyName  ==>this is fuction reference

//fuction execute
// sayMyName()

// function addTwoNumbers(number1, number2) {
//    console.log(number1 + number2); 
// }

function addTwoNumbers(number1, number2) {
    //1st way
    // let result = number1 + number2; 
    // return result

    //2nd way
    return number1+number2
 }

const result= addTwoNumbers(5,3)
//                           ||==> this is called arguments

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(username === undefined) // or (!username)
    {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()); //default value will be printed

// console.log(loginUserMessage("Ruchita"));


function calculateCartPrice(...num1){
    return num1
}
function calculateCartPrice2(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

console.log(calculateCartPrice2(200,400,500,2000,4999));

const user ={
    username:"Ruchita",
    price:199
}

function handleObject(anyObject){
    console.log((`Username is ${anyObject.username} and price is ${anyObject.price}`));

}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const newArray=[200,300,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));

console.log(returnSecondValue([200,500,600]));
