//for

//for duplicate ctrl+d to select same variable
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best number");
        continue;
    }
    console.log(element);
}

for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i+ '*' +j+ '=' +i*j);
    }
}

let myArray=["flash","batman","Superman"]

// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);    
}

//break and continue

for (let i = 1; i <= 20 ;i++) {
    if(i==5){
        console.log(`Detected 5`);
        // break;
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}