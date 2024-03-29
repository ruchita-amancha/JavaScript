// for of

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Jai Shree Ram"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States On America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    // 'game1':'NFS',
    // 'game2':'Spiderman'
    game1: 'NFS',
    game2: 'Spiderman'
}

//we can't iterate object using forof
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}