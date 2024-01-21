const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentValue) {
//     console.log(`accumlator ${acc} and current value ${currentValue}`);
//     return acc + currentValue
// },0)

///*****OR */

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JavaScript course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(price);